import { useEffect, useState } from "react";

import { Tasks } from "../../components/Tasks";
import { Search } from "../../components/Search";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Priorities } from "../../components/Priorities";

import { Container, FixedContent } from "./styles";

export function Home() {
  const [filter, setFilter] = useState("do");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [ search, setSearch ] = useState('') 

  useEffect(() => {
    let arrayTasks = localStorage.getItem('@to-do-easy:tasks');
    arrayTasks = JSON.parse(arrayTasks);
    if (Array.isArray(arrayTasks)) {
      setData(arrayTasks);
    }
  }, []);

  useEffect(() => {
    let newData;

    switch (filter) {
      case "doing":
        newData = data.filter((task) => task.done === false);
        break;
      case "finished":
        newData = data.filter((task) => task.done === true);
        break;
      default:
        newData = data;
    }

    // Depois, aplica o filtro de busca
    if (search) {
      newData = newData.filter((task) => 
        task.title.toLowerCase().includes(search.toLowerCase()) || 
        task.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredData(newData);
  }, [filter, data, search]);
  
  console.log(filteredData)
  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <FixedContent>
        <Header onOpenMenu={() => setMenuIsOpen(true)} />
        <Priorities tasks={data}/>

        <Search 
          setFilter={setFilter} 
          filter={filter} 
          tasks={data} 
          onChange={e => setSearch(e.target.value)}/>

      </FixedContent>

      <Tasks data={filteredData}/>
    </Container>
  );
}
