import { createGlobalStyle } from "styled-components"

// disable browser default styles
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }* {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
   }
  html,
  body {
    height: 100vh;
    width: 100%;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  table {
    border-collapse: collapse;
  }

  td, th {
    border: none;
  }

  tr {
    text-align: center;
    border-bottom: 1px solid white;
    :hover{
      opacity: 0.7;
      color: #FFFF;
    }
  }

  #root {
    width: 100%;
    height: 100%;
    margin: auto 0;
  }`