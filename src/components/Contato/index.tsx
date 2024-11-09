import React from 'react'
import * as S from './styles'
import ContatoClass from '../../models/Contato'

const Contato = ({ id, nome, email, telefone }: ContatoClass) => (
  <S.Contato>
    <td>
      <input value={id} type="checkbox" name="selecionado" />
    </td>
    <td>{nome}</td>
    <td>{telefone}</td>
    <td>{email}</td>
  </S.Contato>
)
export default Contato
