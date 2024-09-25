import { Plus, List, Moon, Sun } from "@phosphor-icons/react"
import { Button } from "../Button"
import { Container, Menu } from "./styles"
import { useNavigate } from "react-router-dom"
import { useRefresh } from "../../hooks/refresh"

export function Header({ onOpenMenu }) {
  const { light, setLight } = useRefresh()
  const navigate = useNavigate()
  const handleNavigateCreate = () => {
    navigate('/create')
  }

  function handleChangeTheme() {
    if(light === false) {
      document.documentElement.classList.add('light')
      setLight(true)
      localStorage.setItem('@to-do-easy:light', 'light')
    } else {
      document.documentElement.classList.remove('light')
      setLight(false)
      localStorage.removeItem('@to-do-easy:light')
    }
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <h1>Tarefas</h1>

      <div className="container-task-mode">
        <Button icon={Plus} title="Nova tarefa" onClick={handleNavigateCreate}/> 

        {light ?
          <Moon className="light-dark" onClick={handleChangeTheme}/> 
          :
          <Sun className="light-dark" onClick={handleChangeTheme}/>
        }
         
      </div>
    </Container>
  );
}
