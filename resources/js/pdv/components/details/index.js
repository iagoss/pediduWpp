import React, {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import {useDispatch} from 'react-redux'
import MaskedInput from 'react-text-mask'
import {Search} from 'react-feather'

import './style.css'
import api from '../../../system/services/api'

const Details = () => {
    const dispatch = useDispatch()

    const [regionOptions, setRegionOptions] = useState([])
    const [deliveryOptions, setDeliveryOptions] = useState([])

    const [deliveryMethodo, setDeliveryMethodo] = useState({})
    const [paymentMethodo, setPaymentMethodo] = useState({})

    const [userSearchData, setUserSearchData] = useState([])

    const inputPhoneRef = useRef(null)

    useEffect(() => {
        async function getRegions() {
            const response = await api.get('/regions')

            let option = []
            response.data.map(region => {
                option.push({
                    value: region.id,
                    label: region.name
                })
            })

            dispatch({type: 'SET_REGIONS', data: response.data})
            setRegionOptions(option)
        }

        async function getDeliverys() {
            const response = await api.get('/deliverys')

            let option = []
            response.data.map(region => {
                option.push({
                    value: region.id,
                    label: region.name
                })
            })

            setDeliveryOptions(option)
        }

        getRegions()
        getDeliverys()
    }, [])

    const handleSearchUser = async () => {
        const response = await api.post('/pdv/search_user', {phone: document.querySelector('input[name="phone"]').value})
        const data = response.data.length > 0 ? response.data[0] : []

        dispatch({type: 'SET_CURRENT_REGION', data: data.region_data})
        setUserSearchData(data)
    }

    return (
        <div className="pdv-details">
            <h1>Cliente</h1>
            <div className="content">
                <div className="line">
                    <div className="form-group">
                        <label htmlFor="select">Entrega</label>
                        <Select
                            id="select"
                            onChange={(delivery) => {
                                setDeliveryMethodo(delivery)
                                dispatch({type: 'SET_DELIVERY_METHODO', data: delivery})
                            }}
                            options={deliveryOptions}
                            name="delivery_option"
                            placeholder="Método de entrega"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            name="phone"
                            id="phone"
                            ref={inputPhoneRef}
                            placeholder="(DDD) 9 9999-9999"
                            required
                        />
                    </div>

                    <div className="small-button" onClick={handleSearchUser}>
                        <Search color="#FFF" size={18} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={userSearchData?.name}
                            required
                            placeholder="Digite o nome do cliente"
                        />
                    </div>
                </div>

                {
                    deliveryMethodo?.value == 1 && (
                        <div className="line">
                            <div className="form-group">
                                <label htmlFor="phone">Rua</label>
                                <input
                                    type="text"
                                    name="address_name"
                                    value={userSearchData?.address_name}
                                    placeholder="Rua"
                                    required
                                />
                            </div>

                            <div className="form-group number">
                                <label htmlFor="phone">Número</label>
                                <input
                                    type="number"
                                    name="address_number"
                                    value={userSearchData?.address_number}
                                    placeholder="Nº"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="select">Bairro</label>
                                <Select
                                    id="select"
                                    name="address_region_id"
                                    value={userSearchData?.region_data}
                                    onChange={(region) => dispatch({type: 'SET_CURRENT_REGION', data: region})}
                                    options={regionOptions}
                                    placeholder="Selecione uma região"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Ponto de referência</label>
                                <input
                                    type="text"
                                    name="address_reference"
                                    placeholder="Ponto de referência"
                                    value={userSearchData?.address_reference}
                                    required
                                />
                            </div>
                        </div>
                    )
                }

                <div className="line">
                    <div className="form-group">
                        <label htmlFor="select">Forma de pagamento</label>
                        <Select
                            id="select"
                            onChange={(payment) => {
                                setPaymentMethodo(payment)
                                dispatch({type: 'SET_PAYMENT_METHODO', data: payment})
                            }}
s                           options={[{label: 'Dinheiro', value: 1}, {label: 'Cartão', value: 2}, {label: 'Pix', value: 3}]}
                            placeholder="Método de pagamento"
                        />
                    </div>

                    {
                        paymentMethodo?.value === 1 && (
                            <div className="form-group">
                                <label htmlFor="payment_moneyback">Troco</label>
                                <input
                                    type="text"
                                    name="payment_moneyback"
                                    placeholder="Digite o valor de troco"
                                    required
                                />
                            </div>
                        )
                    }

                    {
                        deliveryMethodo?.value === 3 && (
                            <div className="form-group">
                                <label htmlFor="phone">Placa do carro</label>
                                <input
                                    type="text"
                                    name="car_board"
                                    placeholder="Digite a placa do carro"
                                    required
                                />
                            </div>
                        )
                    }

                    {
                        deliveryMethodo?.value === 4 && (
                            <div className="form-group">
                                <label htmlFor="phone">Número da mesa</label>
                                <input
                                    type="text"
                                    name="table_number"
                                    placeholder="Digite o número da mesa"
                                    required
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Details
