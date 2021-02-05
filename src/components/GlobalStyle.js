import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export default createGlobalStyle`
  ${normalize}

  :root {
      --blue: #335eea;
  }

  * {
      box-sizing: border-box;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
  }

  body {
      font-family: 'Manrope', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #161c2d;
  }

  a {
      outline: none;
  }

  p { 
      color: #68778e
  }

`
