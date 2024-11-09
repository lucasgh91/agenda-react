import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
  }

  body {
    background: rgb(211, 211, 211);
    background: linear-gradient(
    180deg,
    rgba(170, 170, 170, 1) 0%,
    rgba(255, 255, 255, 1) 90%
    );
    background-repeat: no-repeat;
  }
`

export const Container = styled.div`
  max-width: 960px;
  font-size: 0.8rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`
