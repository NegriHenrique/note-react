import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    padding: 0;
    margin: 0;
    overflow: auto;
    box-sizing: border-box
  }

  body {
    background: #ebebeb;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
  }
`;

export default globalStyle;
