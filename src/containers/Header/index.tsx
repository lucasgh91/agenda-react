import React from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contato'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <S.Header>
      <h1>Agenda</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => dispatch(adicionar())}>Adicionar</button>
          </li>
          <li>
            <button>Editar</button>
          </li>
          <li>
            <button>Excluir</button>
          </li>
        </ul>
      </nav>
    </S.Header>
  )
}
export default Header
