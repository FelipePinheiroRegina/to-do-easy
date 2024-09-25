import styled, {css} from "styled-components"

export const Container = styled.textarea`
    height: 200px;
    width: 100%;

    background-color: ${({ theme}) => theme.COLORS.COMPONENTS_DARK};
    border-radius: 0.43rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.COLOR_DARK};
    padding: 0.75rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    ${({ $light }) => $light === true && css`
        background-color: ${({ theme}) => theme.COLORS.COMPONENTS_LIGHT};
        color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
    `}
`