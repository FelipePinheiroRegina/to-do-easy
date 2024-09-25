import styled, { css } from 'styled-components';

export const Container = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: 30px 1fr 20px 20px;
  gap: 16px;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.COMPONENTS_DARK};
  color: ${({ theme }) => theme.COLORS.COLOR_DARK};

  padding: 1.5rem 1rem;
  border-radius: 0.43rem;

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    &:hover {
      font-size: 1.8rem;
    }
  }

  ${({ $light }) => $light === true && css`
    background-color: ${({ theme }) => theme.COLORS.COMPONENTS_LIGHT};
    color: ${({ theme }) => theme.COLORS.COLOR_LIGHT};
  `}

`;

export const Details = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;
  gap: .2rem;

  > span {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }

  > small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;