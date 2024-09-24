import { Fire } from "@phosphor-icons/react";
import { Container, Header, Tasks } from './styles';
import { ShortTask } from "../ShortTask";

export function Priorities({tasks}) {
  const countPriorities = tasks.filter((task) => task.priority === true);
  return (
    <Container>
      <Header>
        <h1>
          <Fire />
          Prioridades
        </h1>

        <small>{countPriorities.length}</small>
      </Header>

      <Tasks>
        {
          tasks
            .filter((task) => task.priority)
            .map((task) => (
              <ShortTask key={task.id} title={task.title} />
            ))
        }
      </Tasks>
    </Container>
  )
}