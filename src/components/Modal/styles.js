import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    position: absolute;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 8px;

    svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    > .circle {
        &:hover {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > .clock {
        &:hover {
            color: ${({ theme }) => theme.COLORS.RED_200};
        }
    }

    > .check{
        &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN_200};
        } 
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > .clock {
            color: ${({ theme }) => theme.COLORS.RED_200};
        }

        > .check{
            color: ${({ theme }) => theme.COLORS.GREEN_200};   
        }
    }


    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    
    visibility: hidden;
    opacity: 0;
    transform: translateX(0) scaleX(.1);
    transition: .5s;

    &[data-open-modal="true"] {
        visibility: visible;
        opacity: 1;
        transform: translateX(53px) scaleX(1);
        transition: .5s;
    }
`