import React from 'react'

import SwiperCore, { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './styles.css'

SwiperCore.use([A11y])

const Layout = ({data = [], activeCateogry, changeCategory}) => {
    return (
        <div className="category">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={15}

            >
                <SwiperSlide onClick={() => changeCategory('all')}>
                    <div className={`based-cat ${activeCateogry == 'all' ? 'active' : null}`}>
                        <div className="icon-cat" style={{ WebkitMaskBoxImage: `url(https://i.imgur.com/vQVpOGp.png)` }}></div>
                        <div className="name-cat">Todas</div>
                    </div>
                </SwiperSlide>
                {
                    data.map((category) => (
                        <SwiperSlide key={category.id} onClick={() => changeCategory(category.id)}>
                            <div className={`based-cat ${activeCateogry == category.id ? 'active' : null}`}>
                                <div className="icon-cat" style={{ WebkitMaskBoxImage: `url(${category.icon})` }}></div>
                                <div className="name-cat">{category.name}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Layout
