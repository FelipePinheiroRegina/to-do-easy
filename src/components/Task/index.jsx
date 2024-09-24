import { Circle, CheckCircle, PushPinSimple, PushPinSimpleSlash, Pencil } from "@phosphor-icons/react"
import { Container, Details } from './styles'
import { useTheme } from "styled-components"
import { useNavigate } from "react-router-dom" 

export function Task({ data, ...rest }) {
  const { COLORS } = useTheme()
  const navigate = useNavigate()

  const handleNavigateUpdate = (idTask) => {
    navigate(`update/${idTask}`)
  }
  return (
    <Container type="button" 
      $done={data.done} 
      {...rest} 
    >

      {data.done ? <CheckCircle className="check"/> : <Circle />}

      <Details>
        <span>{data.title}</span>
        <small>{data.description}</small>
      </Details>

      <Pencil onClick={() => handleNavigateUpdate(data.id)}/>

      {
        data.priority
          ? <PushPinSimpleSlash color={COLORS.RED_200} />
          : <PushPinSimple color={COLORS.GRAY_400} />
      }
    </Container>
  )
}