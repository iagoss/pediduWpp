import React, {useState} from 'react'

import Layout from './Layout'

const Category = ({data, changeProductList}) => {
    const [category, setCategory] = useState('all')

    const changeCategory = (id) => {
        if(category != id) {
            changeProductList(id)
            setCategory(id)
        }
    }

    return <Layout data={data} activeCateogry={category} changeCategory={changeCategory} />
}

export default Category
