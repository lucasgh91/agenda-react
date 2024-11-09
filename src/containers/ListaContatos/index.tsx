import React from 'react'
import Contato from '../../components/Contato'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contato)

  return (
    <S.ListaContatos>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {contatos.map(({ id, nome, email, telefone }) => (
          <Contato
            key={id}
            id={id}
            nome={nome}
            email={email}
            telefone={telefone}
          />
        ))}
      </tbody>
    </S.ListaContatos>
  )
}
export default ListaContatos
