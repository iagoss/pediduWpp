import React from 'react'
import {useSelector} from 'react-redux'

import Layout from './Layout/index'
import NewLayout from './Layout/new-index'

const Header = () => {
    const configurations = useSelector(state => state.configurations)
    const {banner, logo} = configurations
    const headerOption = 'new'

    return headerOption === 'new' ? <NewLayout data={configurations}/> : <Layout header={banner} logo={logo} />
}

export default Header
