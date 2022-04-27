import React, {useState} from 'react'
import {notify} from 'react-notify-toast'

import Layout from './Layout'

const Optional = ({ data, dataIndex, updateMinimum }) => {
    const [additionalData, setAdditionalData] = useState(data)
    const [selecteds, setSelecteds] = useState([])
    const [totalSelected, setTotalSelected] = useState(0)

    const handleAdditionalCheck = (index, value) => {
        let newData = additionalData

        if(selecteds.length >= additionalData.max && value === true){
            return notify.show(
                `Você só pode selecionar no máximo ${additionalData.max} ${additionalData.max == 1 ? 'opção' : 'opções'}`,
                'warning',
                5000
            )
        }

        if(!selecteds.includes(index)){
            //push index in selecteds
            let NewSelecteds = selecteds
            NewSelecteds.push(index)

            setSelecteds(NewSelecteds)

            //update checkbox
            setTotalSelected(totalSelected+1)
            newData.additional[index].checked = true
            updateMinimum('add', dataIndex, (NewSelecteds.length), newData)

        }else{
            //push index in selecteds
            let NewSelecteds = selecteds
            let position = NewSelecteds.indexOf(index);

            if (index > -1) {
                NewSelecteds.splice(position, 1);
            }

            setSelecteds(NewSelecteds)

            //update checkbox
            setTotalSelected(totalSelected-1)
            newData.additional[index].checked = false
            updateMinimum('remove', dataIndex, (NewSelecteds.length), newData)
        }

        setAdditionalData(newData)
    }

    const handleAdditionalMoreOrLess = (index, dataIndex, type) => {
        let newData = additionalData
        let groupDOM = document.querySelector(`.group-${data.id}`)

        if(totalSelected >= additionalData.max && type === 'more'){
            return notify.show(
                `Você só pode selecionar no máximo ${additionalData.max} ${additionalData.max == 1 ? 'opção' : 'opções'}`,
                'warning',
                5000
            )
        }

        if(type === 'more'){
            newData.additional[index].add++
            setTotalSelected(totalSelected+1)
            updateMinimum('add', dataIndex, newData.additional[index].add, newData)

            if(totalSelected >= (additionalData.max - 1)) {
                groupDOM.classList.add('inactive')
            }
        }else{
            if(newData.additional[index].add > 0){
                newData.additional[index].add--
                setTotalSelected(totalSelected-1)
                updateMinimum('remove', dataIndex, newData.additional[index].add, newData)

                if(newData.additional[index].add < additionalData.max) {
                    groupDOM.classList.remove('inactive')
                }
            }
        }

        setAdditionalData(newData)
    }

    return (
        <>
            <Layout
                data={data}
                dataIndex={dataIndex}
                handleAdditionalCheck={handleAdditionalCheck}
                handleAdditionalMoreOrLess={handleAdditionalMoreOrLess}
            />
        </>
    )
}

export default Optional
