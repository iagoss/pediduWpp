import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Search} from 'react-feather'

import Header from '../../components/Header'
import Category from '../../components/Category'
import List from '../../components/List'
import Shimmer from "../../shimmer"
import ShimmerProducts from '../../shimmer/products'

import api from '../../services/api'
import FilterResults from "react-filter-search";

const Home = () => {
    const ReduxState = () => useSelector(state => state, [])
    const configuration = ReduxState().configurations

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    const [loadingProducts, setLoadingProducts] = useState(true)

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        async function loadProducts(){
            const response = await api.get('/products')
            await setCategories(response.data)
            await setProducts(response.data)

            setLoading(false)
            setLoadingProducts(false)
        }

        loadProducts()
    }, [])

    const changeProductList = async (id) => {
        setLoadingProducts(true)

        const response = await api.get('/products', { params: {category: id} })
        await setProducts(response.data)

        setLoadingProducts(false)
        return false
    }

    if(loading){
        return (
            <>
                <Header />
                <Shimmer />
            </>
        )
    }

    return (
        <>
            <Header />

            <main>
                <div className="search-bar">
                    <input
                        placeholder="Pesquisar produto..."
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <Search style={{
                        position: 'absolute',
                        right: 20,
                        top: 10
                    }}/>
                </div>
                <Category data={categories} changeProductList={changeProductList} />

                {
                    loadingProducts ? (
                        <ShimmerProducts />
                    ) : (
                        <FilterResults
                            value={searchValue}
                            data={products}
                            renderResults={results => (
                                results.map(categories => (
                                    <List key={categories.id} title={categories.name} data={categories.products} search={searchValue} />
                                ))
                            )}
                        />
                    )
                }
            </main>

            <footer style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                padding: 20,
                marginBottom: 60,
                marginTop: -60
            }}>
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    href={configuration?.resale.link}
                    target="_blank"
                >
                    <img
                        style={{
                            maxWidth: '158px',
                            filter: 'invert(1)',
                            opacity: '0.4'
                        }}
                        src={configuration?.resale.logo}
                    />
                    <p style={{color: 'rgba(0, 0, 0, 0.5)'}}>Desenvolvido por <b>{configuration?.resale.name}</b></p>
                </a>
            </footer>
        </>
    )
}

export default Home
