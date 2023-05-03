import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'KCCChassam';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCChassam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration:none;
    }
    body{
        font-family: 'KCCChassam';
    }`;
