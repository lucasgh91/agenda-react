import React from 'react'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { useDispatch, useSelector } from 'react-redux'
import { editarIdSelecionado } from '../../store/reducers/contato'
import { RootReducer } from '../../store'

const Contato = ({ id, nome, email, telefone }: ContatoClass) => {
  const dispatch = useDispatch()
  let editarId = useSelector(
    (state: RootReducer) => state.contato.idSelecionado
  )

  return (
    <S.Contato>
      <td>
        <input
          checked={editarId === id}
          onChange={() => dispatch(editarIdSelecionado(id))}
          value={id}
          type="checkbox"
          name="selecionado"
        />
      </td>
      <td>{nome}</td>
      <td>{telefone}</td>
      <td>{email}</td>
    </S.Contato>
  )
}
export default Contato
