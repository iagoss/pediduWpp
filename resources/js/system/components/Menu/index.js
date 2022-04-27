import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Layout from './Layout'

const Menu = () => {
    const history = useHistory()
    const location = useLocation()

    const navigate = (page) => {
        history.push(page)
    }

    return <Layout currentPage={location.pathname} navigate={navigate} />
}

export default Menu
