import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import {notify} from "react-notify-toast";


const Create = ({query}) => {
    const history = useHistory()

    const complementsModel = {
        name: "",
        description: "",
        price: ""
    }

    const [items, setItems] = useState([])
    const [complements, setComplements] = useState([complementsModel])

    useEffect(() => {
        async function consumer() {
            const response = await api.post('list.php')
            setItems(response.data)
        }

        consumer()
    }, [])

    const addItem = () => {
        setComplements([...complements, complementsModel])
    }

    const removeItem = (index) => {
        const list = [...complements]

        if(list.length > 1){
            list.splice(index, 1)
            setComplements(list)
        }
    }

    const handleFormSubmit = (e) => {
        const form = document.getElementById('form-addItem')
        const formData = new FormData(form)

        const request = new XMLHttpRequest()

        request.onreadystatechange = async function() {
            if (request.readyState === 4) {
                if(request.response?.success){
                    history.push(`/admin/admin.php?p=${query.get('p')}`)
                    return notify.show(
                        `Complemento adicionado com sucesso!`,
                        'success',
                        7000
                    )
                }else{
                    setTimeout(() => {
                        form.style.opacity = "1"
                        document.querySelector('button[type="submit"]').removeAttribute('disabled')
                    }, 500)

                    return notify.show(
                        request.response?.error.message || 'Erro no sistema, procure o suporte!',
                        'error',
                        7000
                    )
                }
            }
        }

        request.responseType = 'json'
        request.open('POST', '/admin/ajax/complements/add.php', true)
        request.send(formData)
    }

    return (
        <>
            <div className="box-content">
                <div className="title-section">
                    Adicionar de Complementos
                </div>

                <form
                    method="post"
                    id="form-addItem"
                    className="form-submit"
                    encType="multipart/form-data"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleFormSubmit()
                    }}
                >
                    <input type="hidden" name="form" value="form"/>

                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Nome</label>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome"
                        />
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Descrição</label>
                        <input
                            className="form-input"
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Descrição"
                        />
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="min">Mínimo selecionavel</label>
                        <input
                            className="form-input"
                            step="any"
                            type="number"
                            name="min"
                            id="min"
                            placeholder="Mínimo selecionavel"
                        />
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="max">Máximo selecionavel</label>
                        <input
                            className="form-input"
                            step="any" type="number"
                            name="max" id="max"
                            placeholder="Máximo selecionavel"
                        />
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="type">Tipo de complemento</label>
                        <select defaultValue={'multiple'} className="form-input" name="type" id="type">
                            <option value="add">Múltiplas opções -/+</option>
                            <option value="multiple">Seleção única</option>
                        </select>
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="hight_price">Cobrar maior valor entre as opções
                            selecionadas?</label>
                        <select defaultValue={'no'} className="form-input" name="hight_price" id="hight_price">
                            <option value="yes">Sim</option>
                            <option value="no">Não</option>
                        </select>
                        <br/>
                    </div>

                    <br/>
                    <div className="well">Adicione itens a esse complemento</div>
                    <br/>

                    <div className="add-new-item">
                        {
                            complements?.map((item, index) => (
                                <div key={index}>
                                    <div className="additional-group" group-id={index}>
                                        <input
                                            className="form-input name"
                                            type="hidden" name={`complemento[${index}][status]`}
                                            id={`complemento[${index}][status]`}
                                            value="active"
                                        />

                                        <div className="item">
                                            <div className="form-group">
                                                <label className="form-label name" htmlFor={`complemento[${index}][name]`}>Nome do
                                                    complemento</label>
                                                <input
                                                    className="form-input name"
                                                    type="text" name={`complemento[${index}][name]`}
                                                    id={`complemento[${index}][name]`}
                                                    placeholder="Nome do complemento"
                                                />
                                                <br/>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label description" htmlFor={`complemento[${index}][description]`}>Descrição
                                                    do complemento</label>
                                                <input
                                                    className="form-input description"
                                                    type="text"
                                                    name={`complemento[${index}][description]`}
                                                    id={`complemento[${index}][description]`}
                                                    placeholder="Descrição do complemento"
                                                />
                                                <br/>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label price" htmlFor={`complemento[${index}][price]`}>Valor do
                                                    complemento</label>
                                                <input
                                                    className="form-input price"
                                                    step="any" type="number"
                                                    name={`complemento[${index}][price]`}
                                                    id={`complemento[${index}][price]`}
                                                    placeholder="Valor do complemento"
                                                />
                                                <br/>
                                            </div>
                                        </div>

                                        <div
                                            style={{maxHeight: 36}}
                                            className="btn btn-danger btn-remove-item"
                                            onClick={() => removeItem(index)}
                                            group-id={index}
                                        >Remover item</div>
                                    </div>

                                    <div
                                        style={{
                                            'width': '100%',
                                            'height': '5px',
                                            'margin': '15px 0',
                                            'background': '#e4e4e4',
                                            'borderRadius': '5px'
                                        }}
                                    ></div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="btn btn-success" onClick={() => addItem()}>Adicionar item</div>

                    <div
                        style={{
                            'width': '100%',
                            'height': '5px',
                            'margin': '15px 0',
                            'background': '#e4e4e4',
                            'borderRadius': '5px'
                        }}
                    ></div>

                    <div className="form-group submit">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create
