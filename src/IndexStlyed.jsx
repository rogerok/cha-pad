import { createGlobalStyle } from "styled-components";

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
img {
  display: block
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 700;
}
ul {
  list-style-type: none;
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: grey;
    font-weight: normal;
    font-size: 18px;  
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;
export default IndexStyled;
