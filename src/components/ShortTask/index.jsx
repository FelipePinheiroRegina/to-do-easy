import { PushPinSimpleSlash } from "@phosphor-icons/react";
import { useRefresh } from '../../hooks/refresh'

import { Container } from './styles';

export function ShortTask({ title, ...rest }) {
  const { light } = useRefresh()
  return (
    <Container 
      type="button" 
      {...rest} 
      $light={light}
      >
        
      {title}
      <PushPinSimpleSlash />
    </Container>
  )
}