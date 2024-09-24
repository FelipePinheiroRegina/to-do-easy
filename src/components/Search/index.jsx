import { MagnifyingGlass } from "@phosphor-icons/react";

import { Input } from '../Input';
import { Filter } from "../Filter";

import { Container, Filters } from './styles';

export function Search({ filter, setFilter, tasks, onChange }) {
  const d0 = tasks.filter((task) => task.status === 'do');
  const doing = tasks.filter((task) => task.status === 'doing');
  const finished = tasks.filter((task) => task.status === 'finished');

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
        placeholder="Pesquise pelo título ou descrição"
        onChange={onChange}
      />

      <Filters>
        <Filter
          title={`Fazer (${d0.length})`}
          onClick={() => setFilter("do")}
          selected={filter === "do"}
        />

        <Filter
          title={`Fazendo (${doing.length})`}
          onClick={() => setFilter("doing")}
          selected={filter === "doing"}
        />

        <Filter
          title={`Finalizados (${finished.length})`}
          onClick={() => setFilter("finished")}
          selected={filter === "finished"}
        />
      </Filters>
    </Container>
  );
};