import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: none;
  font-size: 1rem;
  border: 0;

  color: ${({ theme }) => theme.COLORS.COLOR_DARK};

  &:after {
    display:block;
    content: '';
    border-bottom: solid 3px ${({ theme }) => theme.COLORS.GREEN_200};  
    transition: all 250ms ease-in-out;
    padding-bottom: 16px;
    transform: scaleX(0);
  }

  ${({ selected, theme }) => selected && css`
    font-weight: 700;
    &:after { transform: scaleX(1); }
    color: ${theme.COLORS.GREEN_200}
  `};

  // Estilos para o modo claro
  ${({ $light }) => $light === true && css`
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
  `}
`;