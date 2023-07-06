import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//여기서부터는 자유롭게 커스텀 

  /* *{
    background-color: #181818;
  } */

  body {
    color: var(--text-main);
    background-color: var(--bg-main);
    transition: background 0.5s ease-in, color 0.5s ease-in;
  }
  
  body[data-theme="light"] {
    // major(theme)
    --major-main: #BA1628;
    --major-second: #8E041A;

    // text(common)
    --text-title: #111111;
    --text-subTitle: #1D1D1D;
    --text-main: #181818;
    --text-second: #575757;
    --text-third: #989999;
    --text-fourth: #A8A5A3;
    // text(individual)
    --text-input: #333333;
    --text-rating: #A26F01;
    --text-label: #DBA969;
    --text-label2: #d5A184;

    // background(common)
    --bg-main: #FFFFFF;
    --bg-second: #FAFAFA;
    --bg-third: #F7F3F0;
    // background(individual)
    --bg-progressBar: #E9E9E9;
    --bg-button: #02A78B;
    --bg-rating: #F9F7D6;
    --bg-ratingStar: #EFA000;
    --bg-label: #333333;

    // border(common)
    --border-main: #DEDEDE solid 1px;
    --border-second: #E4E4E4 solid 1px;
    --border-third: #EAE0DA solid 1px;
  }

  body[data-theme="dark"] {
    --text-title: #FFFFFF;
    --text-subTitle: #FFFFFF;
    --text-main: #FFFFFF;
    --bg-main: #181818;
    --border-main: #DEDEDE solid 1px;
  }

  ul, ol {
    list-style: none;
  }
`;