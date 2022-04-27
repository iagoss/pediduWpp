import React from 'react'

import Optional from "../components/Optional";
import {ArrowLeft, Check} from 'react-feather'

import './styles.css'

const ShimmerAdditional = () => {
    return (
        <>
            <div className="comeback"><ArrowLeft /> Voltar</div>
            <header id="additional-h" className="shine" style={{ backgroundImage: `url()` }} />

            <div className="based-text">
                <div className="title-a shine">Pizza de Calabresa</div>
                <div className="desc-a shine" style={{ marginTop: '5px', width: '80%' }}>Alho refogado no azeite, tomate, oregano e cebola.</div>
            </div>

            <main className="shimmer">
                <form>
                    <div id="optional">
                        <div className="title-o shine" style={{width: '80%'}}>Adicionais</div>
                        <div className="desc-o shine" style={{ marginTop: '5px', width: '50%' }}>Selecione uma opção abaixo:</div>

                        <div className="input-group">
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div id="optional">
                        <div className="title-o shine" style={{width: '80%'}}>Adicionais</div>
                        <div className="desc-o shine" style={{ marginTop: '5px', width: '50%' }}>Selecione uma opção abaixo:</div>

                        <div className="input-group">
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                            <div className="checkbox-o" style={{height: 70}}>
                                <input name="delivery" type="checkbox" id="01" />

                                <label htmlFor="01">
                                    <div className="checked"><Check /></div>

                                    <div className="text-c" style={{width: '60%', marginRight: '10%'}}>
                                        <div className="title-c shine">Shimmer Title</div>
                                        <div className="desc-c shine" style={{width: '70%'}}>Desc</div>
                                    </div>

                                    <div className="price-c shine" style={{width: '10%'}}>+ 99,00</div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="title-o">observação</div>
                    <div className="desc-o">É opcional, faça se quiser</div>

                    <div className="input-group">
                        <textarea></textarea>
                    </div>
                </form>
            </main>
        </>
    )
}

export default ShimmerAdditional
