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
      outline-offset: 2px;
  }

  body {
      font-family: 'Manrope', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #161c2d;
  }

  a, button {
      outline: none;
      box-shadow: none;
      transition: all 0.25s;

      &:focus-visible {
          box-shadow: 0 0 0 2px white, 0 0 0 4px black;
      }
  }

  p { 
      color: #68778e
  }

`
