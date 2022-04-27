import React, {useContext, useEffect, useState} from 'react'
import {X, Plus, Minus, Check, ShoppingCart, Gift} from 'react-feather'
import {useSelector, useDispatch} from 'react-redux'
import {CopyToClipboard} from 'react-copy-to-clipboard/lib/Component'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
import {notify} from 'react-notify-toast'
import {UAContext} from '@quentin-sommer/react-useragent'

import TitlePage from '../../components/TitlePage'

import './styles.css'

const Buy = () => {
    const useOSName = () => {
        const {uaResults, parser} = useContext(UAContext)
        return parser.getOS().name
    }

    const history = useHistory()
    const dispatch = useDispatch()

    const ReduxState = () => useSelector(state => state, [])
    const cart = ReduxState().cart
    const user = ReduxState().user
    const coupon = ReduxState().coupon
    const configurations = ReduxState().configurations

    useEffect(() => {
        if(coupon.name){
            setCouponState(false)
        }
    }, [coupon])

    let price = 0
        cart.map(item => {
            price = price + (item.product_price * item.product_quantity)

            item?.client_additional.map(client_additional => {
                if(client_additional.hight_price == 'no'){
                    client_additional.selecteds.map(additional => {
                        price = price + ((parseFloat(additional.price) * parseFloat(additional.qty)) * item.product_quantity)
                    })
                }else{
                    let prices = [];
                    client_additional.selecteds.map(additional => {
                        prices.push(additional.price)
                    })

                    prices.sort((a, b) => b - a)

                    price = price + (parseFloat(prices[0]) * item.product_quantity)
                }
            })

        })

    const [couponState, setCouponState] = useState(true)

    const handleCartItemQuantity = (action, index) => {
        let newCartData = cart

        if(action == 'increment'){
            newCartData[index].product_quantity = newCartData[index].product_quantity+1
        }

        if(action == 'decrement'){
            newCartData[index].product_quantity = (newCartData[index].product_quantity-1) < 1 ? 1 : newCartData[index].product_quantity-1
        }

        dispatch({type: 'UPDATE_CART', data: newCartData})
    }

    const handleRemoveCartItem = (index) => {
        let newCartData = cart

        delete newCartData[index]

        newCartData = newCartData.filter(function (el) {
            return el != null;
        });

        dispatch({type: 'UPDATE_CART', data: newCartData})
    }

    const handleBuy = () => {
        if(user.logged === false) {
            dispatch({type: 'MODAL_LOGIN'})
        }else{
            history.push('/buy')
        }
    }

    const handleCouponSubmit = async (target) => {
        if(user.logged === false) {
            dispatch({type: 'MODAL_LOGIN'})
        }else{
            let data = new FormData(target)
            data.set('token', localStorage.getItem('token'))
            data.set('price', price)

            target.style.opacity = 0.5

            const response = await api.post('/coupon', data)

            target.style.opacity = 1

            if(!response) {
                return notify.show(
                    `Faça login para validar o cupom!`,
                    'error',
                    3000
                )
            }

            if(response.data.error) {
                return notify.show(
                    response.data.error.message,
                    'error',
                    3000
                )
            }else{
                setCouponState(false)
                dispatch({type: 'ADD_COUPON', data: response.data.success.coupon})

                return notify.show(
                    response.data.success.message,
                    'success',
                    3000
                )
            }
        }
    }

    return (
        <>
            <TitlePage title="Carrinho de compras" icon="Anchor" />

            <main>
                <ul id="buyed-items">
                    {
                        cart.length > 0 ? (
                            <>
                                {
                                    cart.map((item, productIndex) => {
                                        let sum_price = item.product_price

                                        return (
                                            <li key={item.product_id}>
                                                <div className="item-image" style={{backgroundImage: `url(${item.product_image})`}}></div>

                                                <div className="product-info">
                                                    <div className="item">
                                                        <div className="title">{item.product_name}</div>
                                                        <div className="price">{item.product_price != 0 ? `R$ ${(item.product_price).toFixed(2)}` : ``}</div>
                                                    </div>

                                                    <div className={`additional ${!item.client_optional && 'out-observation'}`}>
                                                        {
                                                            item?.client_additional.map(client_additional => {
                                                                let sum = true

                                                                if(client_additional.hight_price == 'yes'){
                                                                    sum = false

                                                                    let prices = [];
                                                                    client_additional.selecteds.map(additional => {
                                                                        prices.push(additional.price)
                                                                    })

                                                                    prices.sort((a, b) => b - a)
                                                                    sum_price = sum_price + parseFloat(prices[0])
                                                                }

                                                                return client_additional.selecteds.map((additional, index) => {
                                                                    if(sum){
                                                                        sum_price = sum_price + (parseFloat(additional.price) * parseFloat(additional.qty))
                                                                    }

                                                                    return (
                                                                        <div key={index} className="add">
                                                                            <div className="title">- x{additional.qty} {additional.name}</div>
                                                                            <div className="price">{additional.price > 0 && client_additional.hight_price != 'yes' ? `R$ ${((additional.price)*(additional.qty)).toFixed(2)}` : null}</div>
                                                                        </div>
                                                                    )
                                                                })
                                                            })
                                                        }
                                                    </div>

                                                    {
                                                        item.client_optional && (
                                                            <div className="observation">
                                                                OBS: {item.client_optional}
                                                            </div>
                                                        )
                                                    }

                                                    <div className="total-price">
                                                        <span>Valor total</span>
                                                        <span>R$ {(sum_price*item.product_quantity).toFixed(2)}</span>
                                                    </div>
                                                </div>

                                                <div className="control-quantity">
                                                    <div
                                                        className="btn remove-item"
                                                        onClick={() => handleRemoveCartItem(productIndex)}
                                                    >
                                                        <X size={24}/>
                                                    </div>

                                                    <div
                                                        className="btn more"
                                                        onClick={() => handleCartItemQuantity('increment', productIndex)}
                                                    >
                                                        <Plus size={19}/>
                                                    </div>

                                                    <div className="btn qtty">{item.product_quantity}</div>

                                                    <div
                                                        className="btn less"
                                                        onClick={() => handleCartItemQuantity('decrement', productIndex)}
                                                    >
                                                        <Minus size={19}/>
                                                    </div>
                                                </div>
                                            </li>
                                        )})
                                }

                                <form className="cupom-form" onSubmit={(e) => {
                                    e.preventDefault()
                                    handleCouponSubmit(e.target)
                                }}>
                                    <div className="title-form">Cupom de desconto?</div>
                                    <div className="input-group">
                                        <input name="cupom" id="input-coupon" defaultValue={coupon?.name} disabled={!couponState} required />
                                        <button type="submit" id="submit-coupon" disabled={!couponState}>Aplicar</button>
                                    </div>
                                </form>

                                {
                                    configurations.coupon.length != 0 && (
                                        <CopyToClipboard
                                            text={configurations.coupon[0].name}
                                            onCopy={() => {
                                                document.querySelector('#input-coupon').setAttribute('value', configurations.coupon[0].name)
                                                document.querySelector('#submit-coupon').click()
                                            }}
                                        >
                                            <div className="coupon-content">
                                                <div className="red-box-coupon">
                                                    <Gift size={'50'} color={'#FFF'}/>
                                                    <div className="coupon-infos">
                                                        <b>Cupom de {configurations.coupon[0].discount_type == 'money' ? `R$ ${configurations.coupon[0].discount}` : `${configurations.coupon[0].discount}%`} disponível</b>
                                                        {
                                                            configurations.coupon[0].price_min > 0 && (
                                                                <p>Para pedidos acima de R$ {(configurations.coupon[0].price_min).toFixed(2)}</p>
                                                            )
                                                        }

                                                        {
                                                            configurations.coupon[0].final_date != null && (
                                                                <p>Válido até {configurations.coupon[0].final_date}</p>
                                                            )
                                                        }
                                                    </div>
                                                </div>

                                                <div className="grey-box-coupon">
                                                    Clique para ativar o cupom
                                                </div>
                                            </div>
                                        </CopyToClipboard>
                                    )
                                }
                            </>
                        ) : (
                            <>
                                <div className="warning-cart">
                                    <h1><ShoppingCart size={30}/> estou vazio :(</h1>
                                    <Link to={'/'}> Clique aqui para ver o cardapio</Link>
                                </div>
                            </>
                        )
                    }

                </ul>

                {
                    cart.length > 0 && (
                        <div
                            className="conclude"
                            onClick={() => handleBuy()}
                            style={useOSName() == 'iOS' ? {
                                'paddingBottom': 30,
                                'height': 80
                            } : null}
                        >
                            <Check color="#000000" />

                            <div className="text-c">
                                Finalizar pedido
                                <div className="desc-c">Agora é só selecionar o metodo de pagamento e local de entrega</div>
                            </div>
                        </div>
                    )
                }
            </main>
        </>
    )
}

export default Buy
