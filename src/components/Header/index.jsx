import { Plus, List } from "@phosphor-icons/react"
import { Button } from "../Button"
import { Container, Menu } from "./styles"
import { useNavigate } from "react-router-dom"

export function Header({ onOpenMenu }) {
  const navigate = useNavigate()
  const handleNavigateCreate = () => {
    navigate('/create')
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" onClick={handleNavigateCreate}/>
    </Container>
  );
}
