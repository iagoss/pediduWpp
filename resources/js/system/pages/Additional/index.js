import React, { useContext, useEffect, useState } from "react";
import { Check, ArrowLeft } from "react-feather";
import { notify } from "react-notify-toast";
import { UAContext } from "@quentin-sommer/react-useragent";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Optional from "../../components/Optional";
import ShimmerAdditional from "../../shimmer/additional";

import "./styles.css";

const Additional = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [optional, setOptional] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [hasSelectedMininum, setHasSelectedMininum] = useState([]);
    const [productDataReturned, setProductDataReturned] = useState([]);

    const useOSName = () => {
        const { uaResults, parser } = useContext(UAContext);
        return parser.getOS().name;
    };

    useEffect(() => {
        async function loadProduct(id) {
            const response = await api.post("/product", { id });
            setProduct(response.data[0]);
            setProductPrice(response.data[0].price);

            let arrayMinium = [];
            response.data[0].additional.map((additional, index) => {

                arrayMinium.push({
                    id: index,
                    minimum: additional.min,
                    selected: 0,
                    completed: additional.min === 0 ? true : false
                });
            });

            setHasSelectedMininum(arrayMinium);
            setLoading(false);
        }

        loadProduct(params.id);
    }, []);

    const updateMinimum = async (type, index, selected, returnedData) => {
        let newData = hasSelectedMininum;
        let allAdditional = 0;
        const productAdd = product.additional[index];

        if (type == "add") {
            productAdd.additional.forEach(additional => {
                if (additional.add) {
                    allAdditional = additional.add + allAdditional;
                } else if (additional.checked) {
                    allAdditional++;
                }
            });

            newData[index].selected = allAdditional;
            newData[index].completed =
                allAdditional < productAdd.min ? false : true;
        } else {
            if (newData[index].selected >= newData[index].minimum) {
                newData[index].selected = selected < 0 ? 0 : selected;
                if (newData[index].selected < newData[index].minimum) {
                    newData[index].completed = false;
                }
            }
        }

        setHasSelectedMininum(newData);

        let returned = productDataReturned;
        returned[index] = returnedData;

        /* product price*/
        let price = product.price;
        let additional = [];

        await product.additional?.map((item, index) => {
            additional.push({});
        });

        await returned?.map(async (item, index) => {
            additional[index] = {
                name: item.name,
                hight_price: item.hight_price,
                selecteds: []
            };

            await item.additional.map(async element => {
                if (element?.checked === true || element?.add > 0) {
                    await additional[index].selecteds.push({
                        name: element.name,
                        price: Number(element.price.replace(",", ".")),
                        qty: element?.add ?? 1
                    });
                }
            });
        });

        additional = additional.filter(
            value => Object.keys(value).length !== 0
        );

        await additional?.map(client_additional => {
            if (client_additional.hight_price == "no") {
                client_additional.selecteds.map(additional => {
                    price =
                        price +
                        parseFloat(additional.price) *
                        parseFloat(additional.qty);
                });
            } else {
                let prices = [];
                client_additional.selecteds.map(additional => {
                    prices.push(additional.price);
                });

                prices.sort((a, b) => b - a);

                price = price + parseFloat(prices[0]);
            }
        });

        setProductPrice(price);
        setProductDataReturned(returned);
    };

    const addProductInCar = async () => {
        for (let i = 0; i < hasSelectedMininum.length; i++) {
            if (!hasSelectedMininum[i].completed) {
                return notify.show(
                    `Para adicionar este item, você precisa selecionar ${product.additional[i].min
                    } ${product.additional[i].min == 1 ? "opção" : "opções"
                    } em ${product.additional[i].name}`,
                    "warning",
                    7000
                );

                break;
            }
        }

        let additional = [];

        await product.additional.map((item, index) => {
            additional.push({});
        });

        await productDataReturned.map(async (item, index) => {
            additional[index] = {
                name: item.name,
                hight_price: item.hight_price,
                selecteds: []
            };

            await item.additional.map(async element => {
                if (element?.checked === true || element?.add > 0) {
                    await additional[index].selecteds.push({
                        name: element.name,
                        price: Number(element.price.replace(",", ".")),
                        qty: element?.add ?? 1
                    });
                }
            });
        });

        additional = additional.filter(
            value => Object.keys(value).length !== 0
        );

        const item = {
            product_id: product.id,
            product_name: product.name,
            product_image: product.image,
            product_price: product.price,
            product_buttons: product.delivery_options,
            product_quantity: 1,
            client_optional: optional,
            client_additional: additional
        };

        await dispatch({ type: "ADD_CART_ITEM", item });

        notify.show(`Produto adicionado ao carrinho!`, "success", 2000);

        history.push("/");
    };

    return (
        <>
            <ShimmerAdditional status={loading} />

            <Link to={"/"}>
                <div className="comeback">
                    <ArrowLeft /> Voltar
                </div>
            </Link>

            <header
                id="additional-h"
                style={{ backgroundImage: `url(${product.image})`, margin: 0 }}
            />

            <div className="based-text">
                <div className="title-a">{product.name}</div>
                <div className="desc-a">{product.description}</div>
            </div>

            <main className="shimmer">
                <form>
                    {product?.additional?.map((additional, index) => (
                        <Optional
                            key={additional.id}
                            data={additional}
                            dataIndex={index}
                            updateMinimum={updateMinimum}
                        />
                    ))}

                    <div className="title-o">observação</div>
                    <div className="desc-o">É opcional, faça se quiser</div>

                    <div className="input-group">
                        <textarea
                            value={optional}
                            onChange={e => setOptional(e.target.value)}
                        ></textarea>
                    </div>
                </form>
            </main>

            <div
                className="conclude"
                onClick={() => addProductInCar()}
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
                    Adicionar
                    <div className="desc-c">
                        Será adicionado o valor ao carrinho
                    </div>
                    <div className="price-c">
                        R$ {parseFloat(productPrice) > 0 ? parseFloat(productPrice).toFixed(2) : parseFloat(0).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Additional;
