import React, { FormEvent, useState } from 'react'
import * as S from '../../containers/Formulario/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { editar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const FormularioEditar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const idSelecionado = useSelector(
    (state: RootReducer) => state.contato.idSelecionado
  )

  const contato = useSelector((state: RootReducer) => {
    const contatos = state.contato.contatos
    const contatoFiltrado = contatos.filter((c) => c.id === idSelecionado)
    const c = contatoFiltrado[0]
    return c
  })

  const [nome, setNome] = useState(contato.nome)
  const [tel, setTel] = useState(contato.telefone)
  const [email, setEmail] = useState(contato.email)

  const editarContato = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      editar({ id: idSelecionado, nome: nome, telefone: tel, email: email })
    )
    navigate('/')
  }

  return (
    <S.Formulario>
      <h2>Editar Contato</h2>
      <form onSubmit={(e) => editarContato(e)}>
        <input
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <input
          required
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <button type="submit">Atualizar</button>
      </form>
    </S.Formulario>
  )
}
export default FormularioEditar
