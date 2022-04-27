import React, { Suspense, lazy, useEffect, useState } from 'react'
import Notifications from 'react-notify-toast';
import {UserAgentProvider} from '@quentin-sommer/react-useragent'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './redux/reducer'
import api from './services/api'

//components
import Demand from './components/Demand'
import Menu from './components/Menu'
import Login from './components/Login'
import Loading from './components/Loading'

//pages
const Home = lazy(() => import('./pages/Home'/* webpackChunkName: 'Home' */))
const Shimmer = lazy(() => import('./shimmer'/* webpackChunkName: 'Shimmer' */))
const Buy = lazy(() => import('./pages/Buy'/* webpackChunkName: 'Buy' */))
const Carry = lazy(() => import('./pages/Carry'/* webpackChunkName: 'Carry' */))
const Account = lazy(() => import('./pages/Account'/* webpackChunkName: 'Account' */))
const Informations = lazy(() => import('./pages/Informations'/* webpackChunkName: 'Informations' */))
const Register = lazy(() => import('./pages/Register'/* webpackChunkName: 'Register' */))
const Additional = lazy(() => import('./pages/Additional'/* webpackChunkName: 'Additional' */))
const Order = lazy(() => import('./pages/Order'/* webpackChunkName: 'Order' */))

const Routes = () => {
    const [loading, setLoading] = useState(true);
    const [configurations, setConfigurations] = useState(true);

    useEffect(() => {

        async function loadConfiguration(){
            const response = await api.get('/configurations')
            setConfigurations(response.data[0])

            const root = document.getElementById('root')
            const metatag = document.querySelectorAll('meta[name="theme-color"]')[0]

            const favicon = document.querySelectorAll('link[rel="icon"]')[0]
            await root.style.setProperty('--primary', `${response.data[0].color}`)
            await metatag.setAttribute('content', `${response.data[0].color}`)
            await favicon.setAttribute('href', `${response.data[0].logo}`)

            document.title = response.data[0].name
            setLoading(false)
        }

        loadConfiguration()
    }, [])

    if(loading){
        return <Loading />
    }

    return (
        <UserAgentProvider ua={window.navigator.userAgent}>
            <Provider store={store}>
                <GlobalData data={configurations} />
                <Notifications />

                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Menu />

                        <Demand />
                        <Login />

                        <Switch>
                            <Route path="/" component={Home} exact />

                            <Route path="/shimmer" component={Shimmer} />
                            <Route path="/buy" component={Buy} />
                            <Route path="/order" component={Order} />
                            <Route path="/account" component={Account} />
                            <Route path="/informations" component={Informations} />
                            <Route path="/register" component={Register} />
                            <Route path="/loading" component={Loading} />
                            <Route path="/carry/:id" component={Carry} />
                            <Route path="/additional/:id" component={Additional} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </Provider>
        </UserAgentProvider>
    )
}

const GlobalData = ({data}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)

    useEffect(() => {
        if(localStorage.getItem('token')){
            const loadAuth = async () => {
                const token = localStorage.getItem('token')
                const response = await api.post('/auth', {token})

                localStorage.setItem('token', response.data[0].token)
                dispatch({type: 'SET_LOGGED_DATA', data: response.data[1]})
                dispatch({type: 'SET_LOGGED'})
            }

            loadAuth()
        }

        dispatch({type: 'SET_CONFIGURATIONS', data});
    }, [])
    return (<div></div>)
}

export default Routes
