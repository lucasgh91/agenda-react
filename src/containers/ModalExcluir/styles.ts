import styled from 'styled-components'

const Modal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 41px 1px rgba(0, 0, 0, 0.3);

    & p:last-child {
      text-align: center;

      button:first-child {
        margin-right: 5px;
      }
    }

    h2 {
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 5px;
    }

    button {
      margin-bottom: 0;
    }
  }
`
export default Modal
