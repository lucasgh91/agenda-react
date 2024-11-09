import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = { adicionar?: boolean }

const Header = ({ adicionar }: Props) => {
  return (
    <S.Header>
      <h1>Agenda</h1>
      <nav>
        <ul>
          {adicionar ? (
            <li>
              <Link to={'/'}>Voltar</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={'/adicionar'}>Adicionar</Link>
              </li>
              <li>
                <button>Editar</button>
              </li>
              <li>
                <button>Excluir</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </S.Header>
  )
}
export default Header
