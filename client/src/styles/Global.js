import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  html,
  body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    background-color: ${({ theme }) => theme.colors.white};
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  ul {
    list-style: none;
  }

  a,
  li {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
`
