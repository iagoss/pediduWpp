import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'

import Layout from './Layout'

const Demand = () => {
    const history = useHistory()
    const location = useLocation()

    const cartSate = () => useSelector(state => state.cart, [])
    const cart = cartSate()

    if(cart.length < 1 || location.pathname != '/'){
        return null
    }

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

    const OrderPage = () => {
        history.push('/order')
    }

    return <Layout price={parseFloat(price).toFixed(2)} OrderPage={OrderPage} />
}

export default Demand
