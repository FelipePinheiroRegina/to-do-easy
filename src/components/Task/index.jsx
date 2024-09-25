import { Circle, CheckCircle, PushPinSimple, PushPinSimpleSlash, Pencil } from "@phosphor-icons/react"
import { Container, Details } from './styles'
import { Modal } from "../Modal"

import { useTheme } from "styled-components"
import { useNavigate } from "react-router-dom" 
import { useState } from "react"
import { useRefresh } from '../../hooks/refresh'
import { IconsStatus } from "../IconsStatus"


export function Task({ toast, data, ...rest}) {
  const { COLORS } = useTheme()
  const navigate = useNavigate()
  const { refresh, setRefresh, light } = useRefresh()
  const [ openModal, setOpenModal ] = useState(false) 

  const handleNavigateUpdate = (idTask) => {
    navigate(`update/${idTask}`)
  }

  function handlePin(currentTask) {
    const tasks = JSON.parse(localStorage.getItem('@to-do-easy:tasks'))
    const index = tasks.findIndex(task => task.id === currentTask.id)

    currentTask.priority = !currentTask.priority 
    
    if(index != -1) {
        tasks.splice(index, 1, currentTask)
    }

    localStorage.setItem('@to-do-easy:tasks', JSON.stringify(tasks))
    setRefresh(!refresh)
    toast.success('Prioridades atualizada!')
  }

  function handleOpenModal() {
    setOpenModal(!openModal)
  }
  
  return (
    <Container type="button" 
       $light={light}
      {...rest} 
    >
      
      <Modal 
        key={data.id} 
        openModal={openModal} 
        data={data} 
        toast={toast}
        closeModal={setOpenModal}
      />
      
      <IconsStatus 
        onClick={handleOpenModal}
        status={data.status} 
        className="iconStatus" />

      <Details>
        <span>{data.title}</span>
        <small>{data.description}</small>
      </Details>

      <Pencil onClick={() => handleNavigateUpdate(data.id)}/>

      {
        data.priority
          ? <PushPinSimpleSlash 
              color={COLORS.RED_200} 
              onClick={() => handlePin(data)}
            />
          : 
            <PushPinSimple 
              color={COLORS.GRAY_400} 
              onClick={() => handlePin(data)}
            />
      }
    </Container>
  )
}