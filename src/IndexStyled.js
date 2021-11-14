import {createGlobalStyle} from "styled-components"
import bgImage from "./img/background-image.jpg"

const IndexStyled = createGlobalStyle`
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a,
  a:visited,
  a:active {
    color: inherit;
  }

  /* @keyframes bgScroll {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 0px -1707px;
  }
}*/

  .main-bg {
    /*animation: bgScroll 20s linear infinite;*/
    margin: 0 auto;
    padding: 0 50px;
    color: white;
    background: #232526 url(${bgImage}) repeat-y top right;
    background-size: contain;
  }


  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fdfdfdeb;
    font-weight: normal;
    font-size: 18px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`
export default IndexStyled