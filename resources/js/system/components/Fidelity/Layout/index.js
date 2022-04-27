import React, {useState} from 'react'
import {Award, Check, Gift} from 'react-feather'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {notify} from 'react-notify-toast'

import './style.css'

const Layout = ({configurations, user, itemsFidelity, getCoupon, setPoints, coupon}) => {
    const [buttonStatus, setButtonStatus] = useState(user.data?.fidelity?.buttonStatus)

    return configurations?.fidelity.status === 'active' ? (
        <div className="fidelity">
            <div className="title-box">Programa de fidelidade:</div>
            <div className="text-explication" dangerouslySetInnerHTML={{__html: configurations.fidelity.promotional_text}}/>

            <div className="points">

                {
                    itemsFidelity.map((value, index) => value.marked ? (
                        <div className="point check" key={index}>
                            <Check color={'#FFFFFF'} size={16}/>
                        </div>
                    ) : (
                        <div className="point" key={index}></div>
                    ))
                }

                <div className="point award">
                    <Award color={'#FFFFFF'} size={16}/>
                </div>
            </div>

            {
                buttonStatus ? (
                    <>
                        {
                            coupon !== '' ? (
                                <CopyToClipboard text={coupon} onCopy={() => {
                                    setButtonStatus(false)
                                    setPoints(0)
                                    notify.show(
                                        `Copiado com sucesso!`,
                                        'success',
                                        5000
                                    )
                                }}>
                                    <div className="rescue copy" onClick={() => {}}>
                                        <div>Seu código é: <b>{coupon}</b></div>
                                        <div className="small">aperte para copiar</div>
                                    </div>
                                </CopyToClipboard>
                            ) : (
                                <div className="rescue active" onClick={() => getCoupon()}>
                                    <Gift size={16}/> Resgatar cupom
                                </div>
                            )
                        }
                    </>
                ) : (
                    <div className="rescue inactive">
                        <Gift size={16}/> Resgatar cupom
                    </div>
                )
            }
        </div>
    ) : null
}

export default Layout

