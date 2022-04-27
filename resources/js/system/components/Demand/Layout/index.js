import React, {useContext} from 'react'
import {UAContext} from '@quentin-sommer/react-useragent'
import {ShoppingBag} from 'react-feather'

import './styles.css'

const Layout = ({ price, OrderPage }) => {
    const useOSName = () => {
        const {uaResults, parser} = useContext(UAContext)
        return parser.getOS().name
    }

    return (
        <div
            id="demand"
            onClick={() => OrderPage()}
            style={useOSName() == 'iOS' ? {
                'paddingBottom': 30,
                'height': 80
            } : null}
        >
            Fechar pedido

            <div className="price">
                <ShoppingBag strokeWidth="2.5px" size="16px"/>
                R${price}
            </div>
        </div>
    )
}

export default Layout
