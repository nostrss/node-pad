import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  @media(prefers-color-scheme:light) {
  body{
    background-color: #fff;
    color : black
  }
}

@media(prefers-color-scheme:dark) {
  body{
    background-color: black;
    color : #fff
  }

  a {
    color: #fff;
  }

  a:link {
  /* href 속성이 명시된 상태 */
  color: #61dafb;
  }
  a:visited {
  /* 링크를 클릭해본 상태 */
  color: #016480;
  }
}`;

export default GlobalStyle;
