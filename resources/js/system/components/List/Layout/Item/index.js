import React from 'react'
import {Link} from 'react-router-dom'

import { Plus } from 'react-feather'

import './styles.css'

const Item = ({ data }) => {
    return (
        <div className="item">
            <div className="picture-i" style={{ backgroundImage: `url(${data.image})` }}></div>

            <div className="based-t">
                <div className="title-i">{data.name}</div>
                <div className="desc-i">{data.description}</div>
                <div className="price-i">{data.price != 0 ? `R$ ${data.price.toFixed(2)}` : `A partir de R$ ${data?.price_starting.toFixed(2)}`}</div>
            </div>

            <Link to={`additional/${data.id}`}>
                <div className="btn-added"><Plus /></div>
            </Link>
        </div>
    )
}

export default Item
