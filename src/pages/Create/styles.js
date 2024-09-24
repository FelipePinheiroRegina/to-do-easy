import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 56px; 
`

export const Header = styled.header`
    height: 100px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .back {
        width: 100%;
        text-align: center;

        svg {
            font-size: 24px;
            cursor: pointer;

            &:hover {
                font-size: 28px;
            }
        }
    }

    > .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 24px;
        white-space: nowrap;

        > svg {
            font-size: 32px;
            color: ${({ theme }) => theme.COLORS.GREEN_200};
        }
    }

    > .hidden {
        width: 100%;
    }
`

export const Form = styled.form`
    max-width: 600px;
    width: 100%;
    margin-inline: auto;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    > .aux-position {
        width: 100%;
        display: flex;
        justify-content: end; 

        .button-create {
            width: 30%;
         } 
    }
`