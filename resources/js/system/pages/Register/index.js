import React, {useEffect, useState} from 'react'

import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import MaskedInput from 'react-text-mask'
import {notify} from 'react-notify-toast'

import './styles.css'
import api from '../../services/api'
import TitlePage from '../../components/TitlePage'

const Register = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const ReduxState = () => useSelector(state => state, [])
    const user = ReduxState().user

    const [regions, setRegions] = useState([])
    const [currentRegion, setCurrentRegion] = useState('')
    const [currentRegionData, setCurrentRegionData] = useState([])

    useEffect(() => {
        if(user.logged === true){
            history.push('/')

            return notify.show(
                `Você já possui uma conta!`,
                'error',
                5000
            )
        }

        async function getRegions() {
            const response = await api.get('/regions')
            setRegions(response.data)

            response.data.map(region => {
                if(region.id === user.data?.address_region_id){
                    setCurrentRegion(region)
                }else{
                    setCurrentRegion([])
                }
            })
        }

        getRegions()

    }, [])

    const handleChangeCurrentRegion = (name) => {
        setCurrentRegion(name)

        regions.map(region => {
            if(region.name === name){
                setCurrentRegionData(region)
            }
        })
    }

    const handleSubmit = async (element) => {
        const data = new FormData(element)
        data.set('address_region_id', currentRegionData.id)

        const response = await api.post('/register', data)

        if(response.data.error){
            notify.show(
                response.data.error.message,
                'warning',
                5000
            )
        }else{
            localStorage.setItem('token', response.data[0].token)
            dispatch({type: 'SET_LOGGED_DATA', data: response.data[1]})
            dispatch({type: 'SET_LOGGED'})

            history.push('/')

            return notify.show(
                'Logado com sucesso!',
                'success',
                4000
            )
        }
    }

    return (
        <>
            <TitlePage title="Registre-se" />

            <main>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e.target)
                }}>
                    <div className="input-group">
                        <label>qual o seu nome?</label>
                        <input name="name" required />
                    </div>

                    <div className="input-group">
                        <label>qual o seu telefone?</label>
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            name="phone"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>qual o seu bairro?</label>

                        <input
                            name="address_region_id"
                            list="brow"
                            value={currentRegion}
                            onChange={(e) => {
                                handleChangeCurrentRegion(e.target.value)
                            }}
                            required
                        />

                        <datalist id="brow">
                            {
                                regions?.map((region, index) => (
                                    <option
                                        key={region.id}
                                        value={region.name}
                                    >
                                        {region.name}
                                    </option>
                                ))
                            }
                        </datalist>
                    </div>

                    <div className="input-group">
                        <label>qual sua rua e número?</label>

                        <div className="input-group polinput adress">
                            <input name="address_name" required />
                            <input name="address_number" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>algum ponto de refência?</label>
                        <input name="address_reference" />
                    </div>

                    <div className="input-group-btn">
                        <button type="submit">Registar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Register
