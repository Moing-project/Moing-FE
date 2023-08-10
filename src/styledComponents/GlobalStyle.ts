import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export default createGlobalStyle`


${reset};
@font-face {
    font-family: 'Pretendard Variable';
    src: local('Pretendard Variable'),url('../assets/fonts/PretendardVariable.woff2') format('woff2-variations');
}

:root {
    //colors
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
    --keyColor-01: #5F60ED;
    --keyColor-02: #B1B2F6;
    --keyColor--01: #1A1BE0;
    --keyColor--02: #1617C0;
    --keyColor-main: #3F40E9;

    //caution-color
    --caution-Color: #FF0000;
  }
;

    html{
        font-family : 'Pretendard Variable';
    }




`