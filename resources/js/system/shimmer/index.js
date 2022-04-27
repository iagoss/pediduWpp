import React from 'react'

import './styles.css'

//Category
import '../components/Category/Layout/styles.css'
import SwiperCore, { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//List
import '../components/List/Layout/styles.css'
import '../components/List/Layout/Item/styles.css'

SwiperCore.use([A11y])

const Shimmer = () => {
    return (
        <div className="shimmer">
            <main>
                <div className="category">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={15}

                    >
                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="based-cat">
                                <div className="icon-cat shine"></div>
                                <div className="name-cat shine">Shimmer</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="based-list">
                    <div className="title-list shine">Shimmer</div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>
                </div>

                <div className="based-list">
                    <div className="title-list shine">Shimmer</div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="picture-i shine"></div>

                        <div className="based-t">
                            <div className="title-i shine">Shimmer Title</div>
                            <div className="desc-i shine">Shimmer Desc</div>
                            <div className="price-i shine">Shimmer</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Shimmer
