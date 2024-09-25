import { CheckCircle, Circle, Clock } from "@phosphor-icons/react";
import { Container } from "./styles"
import theme from '../../styles/theme'

export function IconsStatus({ status, ...props }) {
    let icon;

    switch (status) {
        case 'do':
            icon = <Circle  color={theme.COLORS.GRAY_400}/>;
            break;
        case 'doing':
            icon = <Clock color={theme.COLORS.RED_200}/>;
            break;
        case 'finished':
            icon = <CheckCircle color={theme.COLORS.GREEN_200}/>;
            break;
        default:
            icon = null; // Caso o status não corresponda a nenhum caso
    }
    
    return (
        <Container $status={status} {...props}>
            {icon}
        </Container>
    );
}
