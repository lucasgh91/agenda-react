import styled from 'styled-components'

export const ListaContatos = styled.table`
  margin: 0 auto;
  margin-top: 50px;
  border-collapse: separate;
  border-spacing: 2px;

  thead {
    font-size: 16px;
    margin-bottom: 20px;

    &:after {
      content: '';
      display: block;
      margin-top: 10px;
    }
  }
`

export const Alerta = styled.div`
  margin: 50px auto;
  max-width: 250px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 152, 152, 0.5);
  align-items: center;
`
