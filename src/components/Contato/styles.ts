import styled from 'styled-components'

export const Contato = styled.tr`
  background-color: rgba(243, 243, 243, 0.5);

  &:nth-child(even) {
    background-color: rgba(223, 223, 223, 0.5);
  }
  td {
    padding: 10px;
    word-break: break-all;

    input[type='checkbox'] {
      position: relative;
      top: 2px;
      left: 1px;
      cursor: pointer;
      appearance: none;
      width: 15px;
      height: 15px;
      border: 1px solid black;

      &:checked {
        background-color: black;
      }
    }
  }
`
