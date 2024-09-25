import { Container } from './styles';
import { useRefresh } from '../../hooks/refresh';

export function Filter({ title, selected, ...rest }) {
  const { light } = useRefresh()

  return (
    <Container 
      type="button" 
      selected={selected} 
      {...rest}
      $light={light}
      >
      {title}
    </Container>
  )
}