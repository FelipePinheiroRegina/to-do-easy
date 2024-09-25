import { CheckCircle, Circle, Clock } from "@phosphor-icons/react";
import { Container } from "./styles"

export function IconsStatus({ status }) {
    let icon;

    switch (status) {
        case 'do':
            icon = <Circle />;
            break;
        case 'doing':
            icon = <Clock />;
            break;
        case 'finished':
            icon = <CheckCircle />;
            break;
        default:
            icon = null; // Caso o status não corresponda a nenhum caso
    }
    

    return (
        <Container $status={status}>
            {icon}
        </Container>
    );
}
