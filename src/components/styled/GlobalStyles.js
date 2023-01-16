import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}
body{
    background: ${({ theme }) => theme.background} ;
    color: hsl(182, 100%, 9%);
    margin: 0:
}

img{
    height: 23rem;
    width: 28rem;
    opacity: 0.85;
    border-radius: 20px;
    margin: 0 auto;
}

p{
    font-size: 1.2rem;
}

`;

export default GlobalStyles;
