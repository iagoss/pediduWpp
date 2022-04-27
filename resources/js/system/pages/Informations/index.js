import React from 'react'
import {Plus} from 'react-feather'
import {useDispatch, useSelector} from 'react-redux'

import doodle from '../../assets/doodle.svg'
import TitlePage from '../../components/TitlePage'

import './styles.css'

const Informations = () => {
    const ReduxState = () => useSelector(state => state);
    const configurations = ReduxState().configurations

    return (
        <>
            <TitlePage title="Informações" />

            <main>
                <div dangerouslySetInnerHTML={{__html: configurations.informations}}></div>
            </main>
        </>
    )
}

export default Informations
