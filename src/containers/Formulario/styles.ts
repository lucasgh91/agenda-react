import styled from 'styled-components'

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  form {
    margin-top: 25px;
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      border: none;
      padding: 5px;

      &:focus {
        outline-offset: 3px;
        outline-color: #fff;
      }
    }

    button {
      max-width: 100px;
      width: 100%;
    }
  }
`
