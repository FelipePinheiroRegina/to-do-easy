import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.COMPONENTS_DARK};
  color: ${({ theme }) => theme.COLORS.COLOR_DARK};
  
  border-radius: 0.43rem;
  
  > input {
    height: 3.5rem;
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;
    
    color: ${({ theme }) => theme.COLORS.COLOR_DARK};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  ${({ $light }) => $light === true && css`
    background-color: ${({ theme }) => theme.COLORS.COMPONENTS_LIGHT};
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
  `}

  > input {
    ${({ $light }) => $light === true && css`
      color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
    `}
  }
`; 