import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

//여기서부터는 자유롭게 커스텀 

  * {
    background-color: #181818;
  }

  /* html, body { 
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background-color: #ffffff;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI;
    font-size : 16px;
    color: rgb(58, 58, 58);
  }

  ul, ol {
    list-style: none;
  } */



`;