import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }

  > .container-task-mode {
    display: flex;
    align-items: center;
    gap: 16px;

    .light-dark {
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > h1 {
      font-size: 1.5rem;
      flex: 1;
      padding: 0 1rem;
    }
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2rem;
    }
  }
`;
