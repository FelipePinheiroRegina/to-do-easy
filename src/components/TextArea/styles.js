import styled from "styled-components"

export const Container = styled.textarea`
    height: 200px;
    width: 100%;

    background-color: ${({ theme}) => theme.COLORS.GRAY_700};
    border-radius: 0.43rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding: 0.75rem;
`