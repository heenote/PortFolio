import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//여기서부터는 자유롭게 커스텀 

/*모바일 수평 스크롤 제거 */
html,body{
  max-width: 100%; 
  overflow-x: hidden;
}
  body {
    color: var(--text-main);
    background-color: var(--bg-main);
    transition: background 0.5s ease-in, color 0.5s ease-in;
  }
  
  body[data-theme="light"] {
    // major(theme)
    /* --major-main: #BA1628;
    --major-second: #8E041A; */

    // text(common)
    --text-main: #181818;

    // background(common)
    --bg-main: #FFFFFF;
    
  }

  body[data-theme="dark"] {
    --text-main: #FFFFFF;
    --bg-main: #181818;
  }

  ul, ol {
    list-style: none;
  }
`;