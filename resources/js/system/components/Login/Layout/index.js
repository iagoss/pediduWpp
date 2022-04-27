import React from 'react'
import MaskedInput from 'react-text-mask'
import { Phone, X } from 'react-feather'

import './styles.css'

const Layout = ({opened, handleLogin, Close}) => {
    return (
        <div id="login" className={opened ? 'active' : null}>
            <form id="form-login" onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
            }}>
                <div className="title-form">
                    <span>Identifique-se</span>
                    <X size={26} onClick={() => Close()}/>
                </div>

                <div className="input-group">
                    <Phone />
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        name="phone"
                        placeholder="(DDD) 9 9999-9999"
                        required
                    />
                </div>

                <div className="input-group-btn">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Layout
