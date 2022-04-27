import React, { useEffect, useState } from 'react'

import './styles.css'
import {Check, Plus, Minus} from "react-feather";

const Layout = ({ data, dataIndex, handleAdditionalCheck, handleAdditionalMoreOrLess }) => {

    return (
        <div className={`group-${data.id}`} id="optional">
            <div className="additional-infos-c">
                <div className="title-o">{data.name}</div>
                <div className="desc-o">{data.description}</div>
            </div>

            {
                data.type === 'multiple' ? data?.additional.map((additional, index) => additional?.status !== 'inactive' ? (
                    <div key={index} className="input-group">
                        <div className="checkbox-o">
                            <input
                                name="delivery"
                                type="checkbox"
                                checked={additional.checked}
                                onChange={(e) => {
                                    handleAdditionalCheck(index, e.target.checked)
                                }}
                                id={`${dataIndex}-${index}`}
                            />

                            <label htmlFor={`${dataIndex}-${index}`}>
                                <div className="text-c">
                                    <div className="title-c">{additional.name}</div>
                                    <div className="desc-c">{additional?.description}</div>
                                    <div className="price-c">{additional?.price ? `+ R$ ${additional.price}` : ''}</div>
                                </div>

                                <div className="checked"><Check /></div>
                            </label>
                        </div>
                    </div>
                ) : null) : data?.additional.map((additional, index) => additional?.status !== 'inactive' ? (
                    <div key={index} id={`add-${additional?.add}`} className="more-less-additional">
                        <div className="infos-c">
                            <div className="title">{additional?.name}</div>
                            <div className="desc">{additional?.description}</div>
                            <div className="price">{additional?.price ? `+ R$ ${additional.price}` : ''}</div>
                        </div>

                        <div className="btns">
                            <div
                                className="less"
                                onClick={() => {
                                    handleAdditionalMoreOrLess(index, dataIndex, 'less')
                                }}
                            ><Minus size={18}/></div>
                            <div className="count">{additional?.add}</div>
                            <div
                                className="more"
                                onClick={() => {
                                    handleAdditionalMoreOrLess(index, dataIndex, 'more')
                                }}
                            ><Plus size={18}/></div>
                        </div>

                    </div>
                ) : null)
            }
        </div>
    )
}

export default Layout
