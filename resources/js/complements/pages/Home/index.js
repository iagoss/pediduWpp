import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'


const Home = ({query}) => {
    const history = useHistory()
    const [items, setItems] = useState([])

    useEffect(() => {
        consumer()
    }, [])

    async function consumer() {
        const response = await api.post('list.php')
        setItems(response.data)
    }

    const editItem = async (id) => {
        let params = new URLSearchParams()
        params.append('id', id)

        const response = await api.post(`item.php`, params)
        history.push(`/admin/admin.php?p=${query.get('p')}&a=2&id=${id}`, response.data)
    }

    const copyItem = async (id) => {
        let params = new URLSearchParams()
        params.append('id', id)

        await api.post(`copy.php`, params)
        await consumer()
    }

    const deleteItem = async (id) => {
        let params = new URLSearchParams()
        params.append('id', id)

        await api.post(`delete.php`, params)
        await consumer()
    }

    return (
        <>
            <div className="box-content">
                <div className="title-section">
                    Lista de Complementos
                    <Link to={`/admin/admin.php?p=${query.get('p')}&a=1`}>
                        <button onClick={() => {}} className="btn btn-primary f-right">Adicionar</button>
                    </Link>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Autor</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.author}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className="btn btn-success btn-xsm" onClick={() => editItem(item.id)}>Editar</button>
                                        <button className="btn btn-info btn-xsm" onClick={() => copyItem(item.id)}>Duplicar</button>
                                        <button className="btn btn-danger btn-xsm" onClick={() => deleteItem(item.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
