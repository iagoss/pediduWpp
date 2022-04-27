import React from 'react'

import Header from '../../components/Header'
import { LogIn } from 'react-feather'

const Enter = () => {
    return (
        <>
            <Header header="https://exame.com/wp-content/uploads/2020/06/20190903_114354.jpg" logo="https://upload.wikimedia.org/wikipedia/pt/c/cf/Logotipo_do_Burger_King.svg" />

            <main>
                <form>
                    <div className="title-form">Logue-se <LogIn /></div>

                    <div className="input-group">
                        <label>Digite o seu número</label>
                        <input required />
                    </div>

                    <div className="input-group-btn">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Enter