import { Container } from "./styles"
import { CheckCircle, Circle, Clock } from "@phosphor-icons/react"
import { useState } from "react"
import { useRefresh } from "../../hooks/refresh"

export function Modal({openModal, data, toast, closeModal}) {
    const {refresh, setRefresh} = useRefresh()

    const handleOption = (option) => {
        if(data.status === option) {
            closeModal(false)
            return toast.error('Status igual')
        } 

        const tasks = JSON.parse(localStorage.getItem('@to-do-easy:tasks'))
        const index = tasks.findIndex(task => task.id === data.id)

        data.status = option

        if(index != -1) {
            tasks.splice(index, 1, data)
        }

        localStorage.setItem('@to-do-easy:tasks', JSON.stringify(tasks))
        setRefresh(!refresh)
        closeModal(false)
        toast.success('Status atualizado!')
    }
    
    return (
        <Container data-open-modal={openModal}>
            <Circle className="circle"     onClick={() => handleOption('do')}/>
            <Clock className="clock"       onClick={() => handleOption('doing')}/>
            <CheckCircle className="check" onClick={() => handleOption('finished')}/>
        </Container>
    )
}