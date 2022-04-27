import React, {useState} from 'react'
import {notify} from "react-notify-toast";

import Layout from './Layout'

import {useSelector, useDispatch} from "react-redux";
import api from '../../services/api'

const Login = () => {
    const ModalSate = () => useSelector(state => state.user.modalLogin, false)
    const dispatch = useDispatch()
    const isOpen = ModalSate()

    const [submited, setSubmited] = useState(false)

    const handleLogin = async () => {
        if(!submited){
            setSubmited(true)

            let form = document.getElementById('form-login')
                form.style.opacity = 0.5
            let data = new FormData(form)

            const response = await api.post('/login', data)

            if(response.data.error){
                notify.show(
                    response.data.error.message,
                    'warning',
                    5000
                )
            }else{
                localStorage.setItem('token', response.data[0].token)
                dispatch({type: 'SET_LOGGED_DATA', data: response.data[1]})
                dispatch({type: 'MODAL_LOGIN'})
                dispatch({type: 'SET_LOGGED'})

                notify.show(
                    'Logado com sucesso!',
                    'success',
                    4000
                )
            }

            setSubmited(false)
            form.style.opacity = 1
        }
    }

    const Close = () => {
        dispatch({type: 'MODAL_LOGIN'})
    }

    return <Layout opened={isOpen} handleLogin={handleLogin} Close={Close} />
}

export default Login
