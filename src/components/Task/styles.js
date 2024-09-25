import styled, { css } from 'styled-components';

export const Container = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: 20px 1fr 20px 20px;
  gap: 16px;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 1.5rem 1rem;
  border-radius: 0.43rem;


  ${({ $done }) => $done && css`
    opacity: 0.5;
  `};

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    &:hover {
      font-size: 1.8rem;
    }
  }

  > .check {
    ${({ $done }) => $done && css`
    color: ${({ theme }) => theme.COLORS.GREEN_200};
    `};
  }

`;

export const Details = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;

  > span {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }

  > small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;