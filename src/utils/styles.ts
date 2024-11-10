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
    button, p, input, a {
      font-size: 14px;
    }
  }
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`
export const Button = styled.button`
  display: inline-block;
  margin: 10px auto;
  padding: 5px;
  cursor: pointer;
  border: none;
`
export const ButtonVerde = styled(Button)`
  background-color: rgba(0, 181, 21, 0.49);
`
export const ButtonVermelho = styled(Button)`
  background-color: rgba(255, 152, 152, 0.5);
`
