import { Task } from "../Task";
import { Container } from './styles';

export function Tasks({ toast, data }) {
  return (
    <Container>
      {
        data.map((task) => (
          <Task
            key={task.id}
            data={task}
            toast={toast}
          />
        ))
      }
    </Container>
  );
};