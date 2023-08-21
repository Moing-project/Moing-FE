import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family : 'Pretendard';

    //gray
    --gray-01: #FFFFFF;
    --gray-02: #F4F4F4;
    --gray-03: #EBEBEB;
    --gray-04: #CCCCCC;
    --gray-05: #A6A6A6;
    --gray-06: #7D7D7D;
    --gray-07: #444444;
    --black: #000000;

    //font
    --main-font: #202020;

    //key-color
    --keyColor-01: #B1B2F6;
    --keyColor-02: #F6F6FE;
    --keyColor--01: #1A1BE0;
    --keyColor--02: #1617C0;
    --keyColor-main: #3F40E9;

    //caution-color
    --caution-color: #FF0000;
  }
`;

export default GlobalStyle;
