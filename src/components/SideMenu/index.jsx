import {
  CurrencyCircleDollar,
  House,
  Folder,
  Note,
  SignOut,
  X,
} from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button } from "./styles";
import { useState } from "react";
import { useRefresh } from "../../hooks/refresh"


export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { light } = useRefresh()
  const [active, setActive] = useState('Home')

  const handleChangeActive = (option) => {
    setActive(option)
  }

  return (
    <Container 
      data-menu-is-open={menuIsOpen}
      $light={light}
      >

      <Header>
        <Title>
          <CurrencyCircleDollar/>
          To-Do Easy
        </Title>

        {menuIsOpen && 
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        }
      </Header>

      <Nav $light={light}>
        <a href="#" 
          data-menu-active={`${active === "Home" ? true : false}`}
          onClick={() => handleChangeActive('Home')}>

          <House /> Home
        </a>

        <a href="#"
          data-menu-active={`${active === "Project" ? true : false}`}
          onClick={() => handleChangeActive('Project')}>
          <Folder /> Projetos
        </a>

        <a href="#"
          data-menu-active={`${active === "Reports" ? true : false}`}
          onClick={() => handleChangeActive('Reports')}>
          <Note /> Relatórios
        </a>
      </Nav>

      <Footer>
        <img src="https://github.com/FelipePinheiroRegina.png" alt="Foto do usuário" />
        <div>
          <strong>Felipe Pinheiro</strong>
          <small>felipereginadev@gmail.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}
