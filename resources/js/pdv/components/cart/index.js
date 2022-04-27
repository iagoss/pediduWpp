import React, {useEffect, useState} from 'react'
import {X, Plus, Minus, Check, ShoppingCart} from 'react-feather'
import {useSelector, useDispatch} from 'react-redux'

import './style.css'

import api from '../../services/api'

const Cart = ({handleFormBuySubmit}) => {
    const dispatch = useDispatch()

    const ReduxState = () => useSelector(state => state, [])
    const cart = ReduxState().cart
    const regionData = ReduxState().regionData
    const regionCurrent = ReduxState().regionCurrent
    const deliveryOption = ReduxState().deliveryOption

    const [regionPrice, setRegionPrice] = useState(0)


    useEffect(() => {
        setRegionPrice(0)

        if(deliveryOption?.value === 1){
            regionData?.map(region => {
                if(region.id == regionCurrent?.value){
                    setRegionPrice(region.price)
                }
            })
        }
    }, [regionCurrent, regionPrice])

    let price = 0
    cart.map(item => {
        price = price + (item.product_price * item.product_quantity)

        item?.client_additional.map(client_additional => {
            if(client_additional.hight_price == 'no'){
                client_additional.selecteds.map(additional => {
                    price = price + ((parseFloat(additional.price) * additional.qty) * item.product_quantity)
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

    return (
        <div className="pdv-inserted-containers">
            <h1>Carrinho</h1>
            <div className="content">
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
                                </>
                            ) : (
                                <div className="warning-cart">
                                    <h1><ShoppingCart size={30}/> estou vazio :(</h1>
                                </div>
                            )
                        }

                    </ul>

                    {
                        cart.length > 0 && (
                            <>
                                <div className="content-price-info">
                                    <div className="price-info">
                                        <span>Valor da compra:</span>
                                        <p>R$ {(price).toFixed(2)}</p>
                                    </div>


                                    <div className="price-info">
                                        <span>Taxa de entrega:</span>
                                        <p>R$ {regionPrice == 0 || deliveryOption?.value != 1 ? '--,--' : (regionPrice).toFixed(2)}</p>
                                    </div>


                                    <div className="price-info">
                                        <span>Valor total:</span>
                                        <p>R$ {
                                            (Number(price+(deliveryOption?.value === 1 ? regionPrice : 0))).toFixed(2)
                                        }</p>
                                    </div>
                                </div>

                                <div className="conclude" onClick={() => handleFormBuySubmit()}>
                                    <Check color="#000000" />

                                    <div className="text-c">
                                        Finalizar pedido
                                        <div className="desc-c">enviar pedido para produção</div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </main>
            </div>
        </div>
    )
}

export default Cart
