import { Container } from './styles';
import { useRefresh } from '../../hooks/refresh'
export function Input({ icon: Icon, ...rest }) {
  const { light } = useRefresh()

  return (
    <Container $light={light}>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
};