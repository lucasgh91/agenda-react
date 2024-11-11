import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  padding: 20px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #000;
    text-decoration: underline;
    text-decoration-color: #ccc;
  }

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

      a,
      button {
        text-decoration: none;
        color: black;
        font-weight: normal;
        border: 1px solid black;
        border-radius: 5px;
        padding: 4px 10px;
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transition: background-color 0.5s ease;
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`
