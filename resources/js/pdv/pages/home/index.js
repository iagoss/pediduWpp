import React from 'react'
import Notifications, {notify} from 'react-notify-toast'

import {useSelector, useDispatch} from 'react-redux'

import Details from '../../components/details'
import Menu from '../../components/menu'
import Cart from '../../components/cart'
import './style.css'
import api from "../../../system/services/api";

const Home = () => {
    const reduxState = () => useSelector(state => state)
    const state = reduxState()
    const dispatch = useDispatch()


    const handleFormBuySubmit = async () => {
        const formData = {}

        formData.delivery_option = state.deliveryOption?.value
        formData.payment_option = state.paymentOption?.value
        formData.purchase = state.cart

        formData.phone = document.querySelector('input[name="phone"]').value
        formData.name = document.querySelector('input[name="name"]').value

        if(state.deliveryOption?.value == 1){
            formData.address_name = document.querySelector('input[name="address_name"]').value
            formData.address_number = document.querySelector('input[name="address_number"]').value
            formData.address_reference = document.querySelector('input[name="address_reference"]').value
            formData.address_region_id = state.regionCurrent?.value
        }

        if(state.deliveryOption?.value == 3){
            formData.car_board = document.querySelector('input[name="car_board"]').value
        }

        if(state.deliveryOption?.value == 4){
            formData.table_number = document.querySelector('input[name="table_number"]').value
        }

        if(state.paymentOption?.value == 1) {
            formData.payment_moneyback = document.querySelector('input[name="payment_moneyback"]').value
        }

        const response = await api.post('/pdv/buy', formData)

        if(response.data.error) {
            return notify.show(
                response.data.error.message,
                'error',
                3000
            )
        }else{
            dispatch({type: 'UPDATE_CART', data: []})
            dispatch({type: 'SET_CURRENT_REGION', data: null})
            document.getElementById('buyForm').reset()

            return notify.show(
                response.data.success.message,
                'success',
                3000
            )
        }

    }
    return (
        <form id="buyForm" onSubmit={(e) => e.preventDefault()}>
            <Notifications />
            <Details/>

            <div className="pdv-containers">
                <Menu/>
                <Cart handleFormBuySubmit={handleFormBuySubmit}/>
            </div>
        </form>
    )
}

export default Home
