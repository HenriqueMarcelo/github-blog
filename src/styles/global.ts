import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-weight: normal;
        font-family: 'Nunito', sans-serif;
        line-height: 160%;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }

    body {
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};

        padding-bottom: 14.625rem;
    }

    // Elementos Globais

    button {
        cursor: pointer;
    }

    .link {
        color: ${({ theme }) => theme.blue};
        font-size: 0.75rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700;

        display: inline-flex;
        gap: 0.5rem;
        align-items: center;
        border-bottom: 1px solid transparent;

        transition: all 0.1s;
        
        &:hover {
            border-color: ${({ theme }) => theme.blue};
        }
    }

    // Classes auxiliares

    .justify-content-between{
        display: flex;
        justify-content: space-between;
    }

`
