import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: tomato;
    }
  }

  body {
    /* font-family: 'Bebas Neue', cursive; */
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-family: "Bebas Neue"
  }

  a {
    text-decoration: none;
  }

  h3 {
    padding: 1rem 0rem 0rem 0rem;
  }

  p {
    line-height: 200%;
   
  }
  img {
    display: block;
  }
`

export default GlobalStyles