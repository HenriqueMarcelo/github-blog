import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
        line-height: 160%;
    }

    button {
        cursor: pointer;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }

    body {
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
    }

`
