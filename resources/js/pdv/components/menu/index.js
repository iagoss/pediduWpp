import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import FilterResults from "react-filter-search";

import api from "../../../system/services/api";

import "./style.css";
import Additional from "../additional";

const Menu = () => {
    const dispatch = useDispatch();
    const state = () => useSelector(state => state);
    const productModal = state().productModal;

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [producModalId, setProducModalId] = useState(0);

    const [searchValue, setSearchValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/products");
            await setProducts(response.data);
            await setCategories(response.data);
        }

        loadProducts();
    }, []);

    const handleCloseModal = () => {
        dispatch({ type: "PRODUCT_MODAL", data: false });
    };

    const handleOpenProductDetail = id => {
        setProducModalId(id);
        dispatch({ type: "PRODUCT_MODAL", data: true });
    };

    const selectCategoryHandler = e => {
        setSearchValue(e.target.value);
    };

    const inputSearchHandler = e => {
        setInputValue(e.target.value)
        setSearchValue(e.target.value);
    };

    return (
        <div className="pdv-inserted-containers">
            <ReactModal
                isOpen={productModal}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        display: "flex",
                        justifyContent: "center"
                    },

                    content: {
                        width: 800,
                        position: "relative",
                        margin: 50,
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    }
                }}
            >
                <Additional id={producModalId} />
            </ReactModal>

            <h1>Cardápio</h1>

            <FilterResults
                value={searchValue}
                data={products}
                renderResults={results => (
                    <div className="content products-list">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={inputSearchHandler}
                            placeholder="Procure por um produto, catégoria ou id"
                            style={{
                                width: "100%",
                                height: "40px",
                                padding: "5px",
                                borderRadius: "5px",
                                border: "1px solid rgba(0, 0, 0, 0.2)"
                            }}
                        />

                        <select
                            style={{
                                width: "100%",
                                height: "40px",
                                padding: "5px",
                                borderRadius: "5px",
                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                marginTop: "5px"
                            }}
                            onChange={selectCategoryHandler}
                        >
                            <option value="">Todas as categorias</option>
                            {categories.map(categorie => (
                                <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
                            ))}
                        </select>

                        <ul>
                            {results.map(categorie => (
                                <div key={categorie.id}>
                                    <div className="title-categorie">
                                        {categorie.name}
                                    </div>
                                    {categorie.products.map(product => (
                                        <li
                                            key={product.id}
                                            onClick={() =>
                                                handleOpenProductDetail(
                                                    product.id
                                                )
                                            }
                                        >
                                            <p>
                                                #{product.id} - {product.name}
                                            </p>
                                            <span>{product.description}</span>
                                            <b className="price">
                                                {product.price != 0
                                                    ? `R$ ${product.price.toFixed(
                                                          2
                                                      )}`
                                                    : `A partir de R$ ${product?.price_starting.toFixed(
                                                          2
                                                      )}`}
                                            </b>
                                        </li>
                                    ))}
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            />
        </div>
    );
};

export default Menu;
