import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --bg-color: #0c0c0c;
    --primary-color: #0d0d0d;
    --secondary-color: #fff;
    --text-color: #fff;
    --text-color-2: #fff;
    --overlay-color: rgb(12 12 12 / 63%);
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text} !important;
    cursor: pointer !important;
    text-decoration:none
  }

  .nav-button{
    color: #FFFFFF;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;
