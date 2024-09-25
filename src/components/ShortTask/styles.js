import styled, {css} from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.COMPONENTS_DARK};
  color: ${({ theme }) => theme.COLORS.COLOR_DARK};
  height: 44px;
  border: 0;
  padding: 0 1rem;
  border-radius: 0.43rem;
  font-size: 0.87rem;
  
  display: flex;
  align-items: center;
  gap: 7px;

  > svg {
    font-size: 1.12rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }

  ${({ $light }) => $light === true && css`
    background-color: ${({ theme }) => theme.COLORS.COMPONENTS_LIGHT};
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
  `}
`;