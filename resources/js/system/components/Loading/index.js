import React from 'react'

import Lottie from 'lottie-web-react'
import * as animation from './menu-loading.json'

import './styles.css'

const Loading = () => {
    const lottieOptions = {
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets8.lottiefiles.com/private_files/lf30_cIOAbL.json',
        animationData: animation,
        rendererSettings: { 
            preserveAspectRatio: 'xMinYMin slice' 
        }
    }

    return (
        <div id="loading">
            <Lottie options={lottieOptions} />
        </div>
        
    )
}

export default Loading