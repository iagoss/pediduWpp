import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {useHistory, useLocation} from 'react-router-dom'
import {notify} from "react-notify-toast";


const Create = ({query}) => {
    const history = useHistory()
    const location = useLocation()

    const [complements, setComplements] = useState(JSON.parse(location.state.additional))

    const addItem = () => {
        setComplements(prevState => [...prevState, {
            name: "",
            description: "",
            price: "",
            order: prevState.length + 1
        }])
    }

    const removeItem = (index) => {
        const list = [...complements]

        if(list.length > 1){
            setComplements([]);
            delete list[index]

            setTimeout(() => {
                setComplements(list.filter(item => {
                    if(item.name){
                        return item
                    }
                }))
            }, 1);

        }else{
            notify.show(
                'Não foi possível remover esse item.',
                'error',
                7000
            )
        }
    }

    const handleFormSubmit = () => {
        const form = document.getElementById('form-addItem')
        const formData = new FormData(form)

        const request = new XMLHttpRequest()

        request.onreadystatechange = async function() {
            if (request.readyState === 4) {
                if(request.response?.success){
                    history.push(`/admin/admin.php?p=${query.get('p')}`)
                    return notify.show(
                        `Complemento editado com sucesso!`,
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
        request.open('POST', '/admin/ajax/complements/edit.php', true)
        request.send(formData)
    }

    const changeItemStatus = async (index, currentStatus) => {
        let AllComplements = [...complements]
        let complement = {...AllComplements[index]}

        complement.status = currentStatus == 'active' ? 'inactive' : 'active'
        AllComplements[index] = complement

        setComplements(AllComplements)
    }

    return (
        <>
            <div className="box-content">
                <div className="title-section">
                    Adicionar complementos
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
                    <input type="hidden" name="id" value={location.state.id}/>

                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Nome</label>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome"
                            defaultValue={location.state.name}
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
                            defaultValue={location.state.description}
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
                            defaultValue={location.state.min}
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
                            defaultValue={location.state.max}
                        />
                        <br/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="type">Tipo de complemento</label>
                        <select defaultValue={location.state.type} className="form-input" name="type" id="type">
                            <option value="add">Múltiplas opções -/+</option>
                            <option value="multiple">Seleção única</option>
                        </select>
                        <br/>
                    </div>


                    <div className="form-group">
                        <label className="form-label" htmlFor="hight_price">Cobrar maior valor entre as opções
                            selecionadas?</label>
                        <select defaultValue={location.state.hight_price} className="form-input" name="hight_price" id="hight_price">
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
                            (complements?.sort((a, b) => {
                                return a?.order - b?.order
                            })).map((item, index) => (
                                <div key={index}>
                                    <div className="additional-group" group-id={index}>
                                        <input
                                            className="form-input name"
                                            type="hidden"
                                            name={`complemento[${index}][status]`}
                                            id={`complemento[${index}][status]`}
                                            value={item.status || 'active'}
                                        />

                                        <div className="item">
                                            <div className="form-group">
                                                <label className="form-label name" htmlFor={`complemento[${index}][name]`}>Nome do
                                                    complemento</label>
                                                <input
                                                    className="form-input name"
                                                    type="text"
                                                    name={`complemento[${index}][name]`}
                                                    id={`complemento[${index}][name]`}
                                                    placeholder="Nome do complemento"
                                                    defaultValue={item.name}
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
                                                    defaultValue={item.description}
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
                                                    defaultValue={item.price}
                                                />
                                                <br/>
                                            </div>
                                        </div>

                                        <div className="buttons-container">
                                            <div
                                                className="btn btn-danger btn-rotate btn-remove-item"
                                                onClick={() => removeItem(index)}
                                                group-id={index}
                                            >Remover item</div>
                                            <div
                                                className={`btn ${item.status == 'inactive' ? 'btn-success' : 'btn-default'} btn-rotate`}
                                                onClick={() => changeItemStatus(index, item.status || 'active')}
                                                group-id={index}
                                            >{item.status == 'inactive' ? 'Ativar' : 'Inativar'}</div>

                                            <span
                                                htmlFor={`complemento[${index}][order]`}
                                                style={{
                                                    display: 'block',
                                                    marginBottom: 5,
                                                    fontWeight: 'bold'
                                                }}
                                            >Ordem:</span>
                                            <input
                                                id={`complemento[${index}][order]`}
                                                name={`complemento[${index}][order]`}
                                                type="number"
                                                className="form-input"
                                                defaultValue={item.order ? item.order : index}
                                                style={{height: 36, padding: 5, maxWidth: '30%', textAlign: 'center'}}/>
                                        </div>
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
                        <button type="submit" className="btn btn-primary">Editar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create
