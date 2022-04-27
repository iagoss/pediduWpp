import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {notify} from 'react-notify-toast/bin/notify'

import api from '../../services/api'
import Layout from './Layout'

const Fidelity = () => {
    const ReduxState = () => useSelector(state => state);
    const configurations = ReduxState().configurations
    const user = ReduxState().user

    const [itemsFidelity, setItemsFidelity] = useState([])
    const [generatedCoupon, setGeneratedCoupon] = useState('')
    const [points, setPoints] = useState(user.data.fidelity?.totalPoints)

    useEffect(() => {
        let itemsFidelity = []
        let totalFidelityPoints = points

        for(let i = 0; i < configurations.fidelity.total_orders; i++){
            itemsFidelity.push({
                'marked': totalFidelityPoints > 0 ? true : false
            })

            totalFidelityPoints > 0 ? totalFidelityPoints-- : null
        }

        setItemsFidelity(itemsFidelity)
    }, [points])

    const getCoupon = async () => {
        document.querySelector('.rescue.active').style.opacity = 0.5

        let data = {}
        data.token = localStorage.getItem('token')

        const response = await api.post('/fidelity_coupon', data)

        if(response.data.success){
            document.querySelector('.rescue.active').style.opacity = 1
            setGeneratedCoupon(response.data.success.data.coupon)
        }else{
            notify.show(
                response.data.error.message,
                'success',
                5000
            )
        }
    }

    return (
        <Layout
            configurations={configurations}
            user={user}
            itemsFidelity={itemsFidelity}
            getCoupon={getCoupon}
            setPoints={setPoints}
            coupon={generatedCoupon}
        />
    )
}

export default Fidelity
