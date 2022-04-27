import React from 'react'

import './styles.css'

const NewLayout = ({ data: {banner, logo, name, description, opened} }) => {
    return(
        <div className="new-header">
            <header className="" style={{backgroundImage: `url(${banner})`}}></header>
            <div className="informations">
                <div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
                <div className="infos">
                    <div className="name">{name}</div>
                    <div className="description">{description}</div>
                    <div className={`status ${opened == 'yes' ? 'open' : 'close'}`}>{opened == 'yes' ? 'ABERTO AGORA' : 'FECHADO AGORA'}</div>
                </div>
            </div>
        </div>
    )
}

export default NewLayout
