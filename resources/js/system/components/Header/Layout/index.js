import React from 'react'

import './styles.css'

const Layout = ({ header, logo }) => {
    return(
        <header style={{backgroundImage: `url(${header})`}}>
            <div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
        </header>
    )
}

export default Layout