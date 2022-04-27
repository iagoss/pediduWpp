import React, { useContext, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "react-notify-toast";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Axios from "axios";
import { Package, MapPin, DollarSign, CreditCard, Check, ChevronsRight } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";

import TitlePage from "../../components/TitlePage";

import "./styles.css";
import api from "../../services/api";
import { UAContext } from "@quentin-sommer/react-useragent";

const Buy = () => {
    const bodyRef = useRef(null);

    const useOSName = () => {
        const { uaResults, parser } = useContext(UAContext);
        return parser.getOS().name;
    };
    const history = useHistory();
    const dispatch = useDispatch();

    const ReduxState = () => useSelector(state => state, []);
    const cart = ReduxState().cart;
    const user = ReduxState().user;
    const configurations = ReduxState().configurations;
    const coupon = ReduxState().coupon;

    const [step, setStep] = useState(1);
    const [delivery, setDelivery] = useState(1);
    const [payment, setPayment] = useState(1);

    const [regions, setRegions] = useState([]);
    const [cardFlags, setCardFlags] = useState([]);
    const [currentCardFlag, setCurrentCardFlag] = useState([]);
    const [currentRegion, setCurrentRegion] = useState("");
    const [regionOptions, setRegionOptions] = useState([]);
    const [currentRegionData, setCurrentRegionData] = useState([]);
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [pixData, setPixData] = useState([]);

    const [carBoard, setCarBoard] = useState("");
    const [tableNumber, setTableNumber] = useState("");
    const [userName, setUserName] = useState("");
    const [addressName, setAddressName] = useState(user.data?.address_name);
    const [addressNumber, setAddressNumber] = useState(
        user.data?.address_number
    );
    const [addressReference, setAddressReference] = useState(
        user.data?.address_reference
    );

    let price = 0;
    cart.map(item => {
        price = price + item.product_price * item.product_quantity;

        item?.client_additional.map(client_additional => {
            if (client_additional.hight_price == "no") {
                client_additional.selecteds.map(additional => {
                    price =
                        price +
                        parseFloat(additional.price) *
                            additional.qty *
                            item.product_quantity;
                });
            } else {
                let prices = [];
                client_additional.selecteds.map(additional => {
                    prices.push(additional.price);
                });

                prices.sort((a, b) => b - a);

                price = price + parseFloat(prices[0]) * item.product_quantity;
            }
        });
    });

    let buttons = [];
    cart.map(item => {
        buttons.push(item.product_buttons.split(",").filter(a => a != ""));
    });

    let avaliable_buttons = buttons.sort((a, b) => a.length - b.length);

    const [moneyBack, setMoneyBack] = useState(0);
    const [needMoneyBack, setNeedMoneyBack] = useState("");

    useEffect(() => {
        if (cart.length < 1) {
            history.push("/");

            notify.show(
                `Você não pode acessar essa página sem itens no seu carrinho!`,
                "error",
                5000
            );
        }

        if (user.logged === false) {
            history.push("/");

            notify.show(
                `Apenas usuários logados podem acessar essa página!`,
                "error",
                5000
            );
        }

        let source = Axios.CancelToken.source();

        async function getRegions() {
            const response = await api.get("/regions", {
                cancelToken: source.token
            });
            setRegions(response.data);

            response.data.map(region => {
                if (region.id === user.data?.address_region_id) {
                    setCurrentRegionData(region);
                    setCurrentRegion({ value: region.id, label: region.name });
                }
            });

            let option = [];
            response.data.map(region => {
                option.push({
                    value: region.id,
                    label: region.name
                });
            });

            setRegionOptions(option);
        }

        async function getCardFlags() {
            const response = await api.get("/card_flags", {
                cancelToken: source.token
            });

            let option = [];
            response.data.map(flag => {
                option.push({
                    value: flag.id,
                    label: flag.name
                });
            });

            setCardFlags(option);
        }

        async function getDeliverys() {
            const response = await api.get("/deliverys", {
                cancelToken: source.token
            });
            setDeliveryOptions(response.data);
        }

        async function getPixData() {
            const response = await api.get("/pix", {
                cancelToken: source.token
            });

            setPixData(response.data);
        }

        getRegions();
        getDeliverys();
        getCardFlags();
        getPixData();

        return () => source.cancel("Landing Component got unmounted");
    }, []);

    const handleChangeCurrentRegion = option => {
        setCurrentRegion(option);

        regions.map(region => {
            if (region.name === option.label) {
                setCurrentRegionData(region);
            }
        });
    };

    const handleDeliveryMethodoChange = option => {
        setStep(3);
        setDelivery(option);
    };

    const handlePaymentMethodoChange = option => {
        setStep(4);
        setPayment(option);

        setTimeout(() => {
            window.scrollTo(0, 1000);
        }, 100);
    };

    const handleNeedMoneyBackChange = value => {
        setNeedMoneyBack(value);

        setTimeout(() => {
            window.scrollTo(0, 1000);
        }, 100);
    };

    const [isSubmited, setIsSubmited] = useState(false);

    const handleSubmit = async target => {
        if (!isSubmited) {
            setIsSubmited(true);

            let data = {};
            data.token = localStorage.getItem("token");
            data.delivery_option = delivery;
            data.payment_option = payment;
            data.purchase = cart;

            if (data.payment_option == 1 && needMoneyBack == "") {
                setTimeout(() => {
                    setIsSubmited(false);
                }, 1000);

                return notify.show(
                    "Informe se irá precisar de troco ou não.",
                    "error",
                    3000
                );
            }

            if (data.payment_option == 2 && !currentCardFlag.value) {
                setTimeout(() => {
                    setIsSubmited(false);
                }, 1000);

                return notify.show(
                    "Selecione a bandeira do cartão que você irá utilizar.",
                    "error",
                    3000
                );
            }

            target.style.opacity = 0.5;

            if (userName != "") {
                data.name = userName;
            }

            if (delivery === 1) {
                data.address_name = addressName;
                data.address_number = addressNumber;
                data.address_reference = addressReference;
                data.address_region_id = currentRegionData.id;
            }

            if (delivery === 3) {
                data.car_board = carBoard;
            }

            if (delivery === 4) {
                data.table_number = tableNumber;
            }

            if (payment === 1 && needMoneyBack == "yes") {
                data.payment_moneyback = moneyBack;
            }

            if (payment === 2) {
                data.payment_card_flags = currentCardFlag?.value;
            }

            const response = await api.post("/buy", data);

            if (response.data.error) {
                target.style.opacity = 1;
                setTimeout(() => {
                    setIsSubmited(false);
                }, 1000);

                return notify.show(
                    response.data.error.message,
                    "warning",
                    3000
                );
            } else {
                history.push(`carry/${response.data.success.data.id}`, {
                    data: response.data.success.data
                });
                dispatch({ type: "UPDATE_CART", data: [] });

                target.style.opacity = 1;
                setTimeout(() => {
                    setIsSubmited(false);
                }, 1000);

                return notify.show(
                    response.data.success.message,
                    "success",
                    3000
                );
            }

            target.style.opacity = 1;
        }
    };

    return (
        <>
            <TitlePage title="Finalizar Compra" icon="Anchor" />

            <main ref={bodyRef} style={{ marginBottom: 80 }}>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        handleSubmit(e.target);
                    }}
                >
                    <div className="title-form">opções de entrega:</div>

                    <div className="input-group-btn delivery-options">
                        {deliveryOptions?.map(
                            option =>
                                avaliable_buttons[0].includes(
                                    String(option.id)
                                ) && (
                                    <div className="btn" key={option.id}>
                                        <input
                                            name="delivery"
                                            type="radio"
                                            id={option.id}
                                            onChange={() =>
                                                handleDeliveryMethodoChange(
                                                    option.id
                                                )
                                            }
                                        />

                                        <label htmlFor={option.id}>
                                            <div>
                                                {option.id === 1 && <Package />}
                                                {option.id === 2 && <MapPin />}
                                                {option.id === 3 && <MapPin />}
                                                {option.id === 4 && <MapPin />}
                                                {option.name}
                                            </div>
                                            <div className="desc-btn">
                                                Previsão:{" "}
                                                {option.id == 1
                                                    ? configurations.delivery_time
                                                    : configurations.withdraw_time}
                                            </div>
                                        </label>
                                    </div>
                                )
                        )}
                    </div>

                    {step >= 2 && !user.data?.name && (
                        <div className="input-group">
                            <label>qual seu nome?</label>
                            <input
                                name="name"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {step >= 2 && delivery === 1 ? (
                        <>
                            <div className="input-group">
                                <label>qual o seu bairro?</label>
                                <Select
                                    required
                                    name="address_region_id"
                                    value={currentRegion}
                                    defaultInputValue={currentRegionData.name}
                                    onChange={handleChangeCurrentRegion}
                                    placeholder="Selecione sua região"
                                    options={regionOptions}
                                />
                            </div>

                            <div className="input-group">
                                <label>qual sua rua e número?</label>

                                <div className="input-group polinput adress">
                                    <input
                                        name="address_name"
                                        value={addressName}
                                        onChange={e =>
                                            setAddressName(e.target.value)
                                        }
                                        required
                                    />

                                    <input
                                        name="address_number"
                                        value={addressNumber}
                                        onChange={e =>
                                            setAddressNumber(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>algum ponto de refência?</label>
                                <input
                                    name="address_reference"
                                    value={addressReference}
                                    onChange={e =>
                                        setAddressReference(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </>
                    ) : null}

                    {step >= 3 && delivery === 3 ? (
                        <div className="input-group">
                            <label>Qual a placa do seu carro?</label>
                            <input
                                type="text"
                                name="car_board"
                                value={carBoard}
                                onChange={e => setCarBoard(e.target.value)}
                                required
                            />
                        </div>
                    ) : null}

                    {step >= 3 && delivery === 4 ? (
                        <div className="input-group">
                            <label>Qual o número da mesa?</label>
                            <input
                                type="text"
                                name="table_number"
                                value={tableNumber}
                                onChange={e => setTableNumber(e.target.value)}
                                required
                            />
                        </div>
                    ) : null}

                    {step >= 3 ? (
                        <>
                            <div className="content-price-info">
                                <div className="price-info">
                                    <span>Valor da compra:</span>
                                    <p>R$ {price.toFixed(2)}</p>
                                </div>

                                {delivery == 1 && (
                                    <div className="price-info">
                                        <span>Taxa de entrega:</span>
                                        <p>
                                            R${" "}
                                            {currentRegionData?.price
                                                ? currentRegionData.price.toFixed(
                                                      2
                                                  )
                                                : "--,--"}
                                        </p>
                                    </div>
                                )}

                                {coupon.value && (
                                    <div className="price-info">
                                        <span>Desconto:</span>
                                        <p>
                                            {coupon.type == "money"
                                                ? `R$ ${coupon.value}`
                                                : `${coupon.value}%`}
                                        </p>
                                    </div>
                                )}

                                <div className="price-info">
                                    <span>Valor total:</span>
                                    <p>
                                        R${" "}
                                        {(
                                            (!coupon.value
                                                ? price
                                                : coupon.type == "money"
                                                ? price - coupon.value
                                                : price -
                                                  (price * coupon.value) /
                                                      100) +
                                            (delivery === 1
                                                ? currentRegionData?.price
                                                    ? currentRegionData?.price
                                                    : 0
                                                : 0)
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className="title-form">
                                forma de pagamento:
                            </div>

                            <div className="input-group-btn">
                                <div className="btn">
                                    <input
                                        name="payment"
                                        type="radio"
                                        id="p1"
                                        onChange={() =>
                                            handlePaymentMethodoChange(1)
                                        }
                                    />

                                    <label htmlFor="p1">
                                        <div>
                                            <DollarSign /> DINHEIRO
                                        </div>
                                        <div className="desc-btn">
                                            Clique e digite o troco abaixo
                                        </div>
                                    </label>
                                </div>

                                <div className="btn">
                                    <input
                                        name="payment"
                                        type="radio"
                                        id="p2"
                                        onChange={() =>
                                            handlePaymentMethodoChange(2)
                                        }
                                    />

                                    <label htmlFor="p2">
                                        <div>
                                            <CreditCard /> CARTÃO
                                        </div>
                                        <div className="desc-btn">
                                            Máquina com motoboy
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {pixData[0].status == "active" && (
                                <div className="input-group-btn input-pix">
                                    <div className="btn">
                                        <input
                                            name="payment"
                                            type="radio"
                                            id="p3"
                                            onChange={() =>
                                                handlePaymentMethodoChange(3)
                                            }
                                        />

                                        <label htmlFor="p3">
                                            <div>
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.396 23.31C22.2189 23.31 21.1119 22.8517 20.2797 22.0198L15.78 17.5201C15.4642 17.2034 14.9135 17.2044 14.5977 17.5201L10.0816 22.0363C9.2492 22.8681 8.14225 23.3264 6.96518 23.3264H6.07849L11.7773 29.0254C13.5572 30.8051 16.4429 30.8051 18.2227 29.0254L23.9381 23.31H23.396Z" fill="currentColor"></path>
                                                    <path d="M6.96516 7.39381C8.14223 7.39381 9.24918 7.85225 10.0814 8.68419L14.5975 13.201C14.9228 13.5263 15.4539 13.5277 15.7799 13.2006L20.2796 8.70056C21.1119 7.86862 22.2189 7.41032 23.3959 7.41032H23.9379L18.2227 1.69509C16.4428 -0.0847756 13.5572 -0.0847756 11.7773 1.69509L6.07861 7.39381H6.96516Z" fill="currentColor"></path>
                                                    <path d="M28.6651 12.1375L25.2113 8.68378C25.1353 8.71426 25.053 8.73331 24.9661 8.73331H23.3959C22.584 8.73331 21.7893 9.0625 21.2158 9.6365L16.716 14.1363C16.2951 14.5573 15.7418 14.7681 15.189 14.7681C14.6357 14.7681 14.0829 14.5573 13.6619 14.1367L9.14532 9.62014C8.5716 9.04613 7.77705 8.71694 6.96515 8.71694H5.03431C4.95205 8.71694 4.87501 8.69747 4.80234 8.67009L1.3349 12.1375C-0.444965 13.9173 -0.444965 16.803 1.3349 18.583L4.8022 22.0503C4.87487 22.0229 4.95205 22.0034 5.03431 22.0034H6.96515C7.77705 22.0034 8.5716 21.6743 9.14532 21.1002L13.6614 16.5841C14.4777 15.7685 15.9006 15.7681 16.716 16.5845L21.2158 21.0837C21.7893 21.6579 22.584 21.9871 23.3959 21.9871H24.9661C25.0532 21.9871 25.1353 22.006 25.2115 22.0365L28.6651 18.583C30.445 16.803 30.445 13.9173 28.6651 12.1375Z" fill="currentColor"></path>
                                                </svg>
                                                PIX
                                            </div>
                                            <div className="desc-btn">
                                                Envie o comprovante por Whatsapp
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : null}

                    {step >= 4 && payment === 1 ? (
                        <div className="input-group">
                            <label>Precisa de troco?</label>
                            <div className="money-back">
                                <div className="option">
                                    <input
                                        type="radio"
                                        name="need_money_back"
                                        id="noNeed"
                                        value="no"
                                        onChange={e =>
                                            handleNeedMoneyBackChange(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor="noNeed">Não</label>
                                </div>

                                <div className="option">
                                    <input
                                        type="radio"
                                        name="need_money_back"
                                        id="yesNeed"
                                        value="yes"
                                        onChange={e =>
                                            handleNeedMoneyBackChange(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label htmlFor="yesNeed">Sim</label>
                                </div>
                            </div>

                            {needMoneyBack == "yes" && (
                                <>
                                    <label>Para quanto?</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        name="payment_moneyback"
                                        value={moneyBack}
                                        onChange={e =>
                                            setMoneyBack(e.target.value)
                                        }
                                        required
                                    />
                                </>
                            )}
                        </div>
                    ) : null}

                    {step >= 4 && payment == 2 && (
                        <div
                            className="input-group"
                            style={{ marginBottom: 50 }}
                        >
                            <label>Qual a bandeira do seu cartão?</label>
                            <Select
                                name="payment_card_id"
                                value={currentCardFlag}
                                onChange={setCurrentCardFlag}
                                placeholder="Selecione a bandeira do seu cartão"
                                options={cardFlags}
                            />
                        </div>
                    )}

                    {step >= 4 && payment == 3 && (
                        <div className="pix-info">A Chave PIX estará disponível após você clicar em "Concluir".</div>
                    )}

                    {step >= 4 ? (
                        <button
                            type="submit"
                            className="conclude"
                            style={
                                useOSName() == "iOS"
                                    ? {
                                          paddingBottom: 30,
                                          height: 80
                                      }
                                    : null
                            }
                        >
                            <Check />

                            <div className="text-c">
                                Concluir
                                <div className="desc-c">
                                    O pedido será enviado para os nossos
                                    atendentes
                                </div>
                            </div>
                        </button>
                    ) : null}
                </form>
            </main>
        </>
    );
};

export default Buy;
