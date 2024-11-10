import React, { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'
import { ButtonVerde } from '../../utils/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const cadastraNovoContato = (e: FormEvent) => {
    e.preventDefault()
    if (nome && tel && email) {
      dispatch(adicionar({ id: 0, nome: nome, telefone: tel, email: email }))
      navigate('/')
    }
  }

  return (
    <S.Formulario>
      <h2>Novo Contato</h2>
      <form onSubmit={cadastraNovoContato}>
        <input
          autoComplete="true"
          id="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <input
          autoComplete="true"
          id="tel"
          required
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <input
          autoComplete="true"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <ButtonVerde type="submit">Adicionar</ButtonVerde>
      </form>
    </S.Formulario>
  )
}
export default Formulario
