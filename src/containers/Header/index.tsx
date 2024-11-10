import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = { home?: boolean }

const Header = ({ home }: Props) => {
  const idSelecionado = useSelector(
    (state: RootReducer) => state.contato.idSelecionado
  )

  return (
    <S.Header>
      <h1>Agenda</h1>
      <nav>
        <ul>
          {home === false ? (
            <li>
              <Link to={'/'}>Voltar</Link>
            </li>
          ) : (
            <>
              {!idSelecionado ? (
                <li>
                  <Link to={'/adicionar'}>Adicionar</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={'/editar'}>Editar</Link>
                  </li>
                  <li>
                    <button>Excluir</button>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>
    </S.Header>
  )
}
export default Header
