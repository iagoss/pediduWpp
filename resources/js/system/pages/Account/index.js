import React, {useEffect, useState} from 'react'
import {Plus, X} from 'react-feather'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import doodle from '../../assets/doodle.svg'
import TitlePage from '../../components/TitlePage'

import './styles.css'
import api from '../../services/api'
import Fidelity from "../../components/Fidelity";

const Account = () => {
    const ReduxState = () => useSelector(state => state);
    const dispatch = useDispatch()
    const history = useHistory()
    const configurations = ReduxState().configurations
    const user = ReduxState().user

    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        if(user.logged === true) {
            async function orderList() {
                const response = await api.post('order_list', {token: localStorage.getItem('token')})
                setOrdersList(response.data)
            }

            orderList()
        }
    }, [user])

    const handleUserLogout = () => {
        dispatch({type: 'SET_LOGGED_DATA', data: []})
        dispatch({type: 'SET_LOGOUT'})
        localStorage.clear()
    }

    return (
        <>
            <TitlePage title="Conta" />

            <main>
                {
                    !user.logged ? (
                        <>
                            <div className="doodle-image-container">
                                <img className="doodle-login" src={doodle}/>
                            </div>

                            <div className="group-btn">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        dispatch({type: 'MODAL_LOGIN'})
                                    }}
                                >
                                    Entre na sua conta
                                </button>
                                <button type="submit" onClick={() => {
                                    history.push('/register')
                                }}>
                                    <span>Registre-se</span>
                                    <p>Crie sua conta para desfrutar do nosso sistema</p>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="orders-list">
                                <Fidelity />
                                <div className="title-box">Seus últimos pedidos:</div>
                                <ul>
                                    {
                                        ordersList.length === 0 ? (
                                            <h1>Você ainda não fez nenhum pedido.</h1>
                                        ) : (
                                            ordersList.map(order => (
                                                <li key={order.id} onClick={() => {
                                                    history.push(`/carry/${order.id}`, {data: order})
                                                }}>
                                                    <div className="infos">
                                                        <div className="indentify">#{order.id}</div>
                                                        <div className="date">{order.created_at}</div>
                                                    </div>
                                                    <div className="button">
                                                        <Plus/>
                                                    </div>
                                                </li>
                                            ))
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="logout" onClick={() => handleUserLogout()}>
                                <div className="icon">
                                    <X size={18} color={'#FFFFFF'}/>
                                </div>
                                <span>Sair da conta</span>
                            </div>
                        </>
                    )
                }
            </main>
        </>
    )
}

export default Account
