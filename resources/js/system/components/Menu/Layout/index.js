import React from 'react'

import { AlertCircle, ShoppingCart, User, BookOpen } from 'react-feather';

import './styles.css'

const Layout = ({currentPage, navigate}) => {
    return(
        <nav id="main-nav">
            <ul>
                <li
                    className={currentPage == '/' ? 'active' : null}
                    onClick={() => navigate('/')}
                >
                    <BookOpen /> Cardápio
                </li>

                <li
                    className={currentPage == '/order' || currentPage == '/buy' ? 'active' : null}
                    onClick={() => navigate('/order')}
                >
                    <ShoppingCart /> Pedido
                </li>

                <li
                    className={currentPage == '/informations' ? 'active' : null}
                    onClick={() => navigate('/informations')}
                >
                    <AlertCircle /> Info
                </li>

                <li
                    className={currentPage == '/account' ? 'active' : null}
                    onClick={() => navigate('/account')}
                >
                    <User /> Conta
                </li>
            </ul>
        </nav>
    )
}

export default Layout
