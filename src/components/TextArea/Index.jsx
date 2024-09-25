import { Container } from './styles'
import { useRefresh } from '../../hooks/refresh'

export function TextArea({...props}) {
    const { light } = useRefresh()

    return (
        <Container {...props} $light={light}>
            
        </Container>
    )
}