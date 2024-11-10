import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  padding: 20px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: baseline;

    li {
      margin-left: 20px;

      a {
        text-decoration: none;
        color: black;
        font-weight: normal;
      }

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`
