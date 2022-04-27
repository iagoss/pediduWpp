import React from 'react'
import FilterResults from 'react-filter-search'

import Item from './Item'

import './styles.css'

const Layout = ({ title, data, search }) => {
    return (
        <div className="based-list">
            <div className="title-list">{title}</div>

            <FilterResults
                value={search}
                data={data}
                renderResults={results => (
                    results?.map(product => (
                        <Item key={product.id} data={product} />
                    ))
                )}
            />
        </div>
    )
}

export default Layout
