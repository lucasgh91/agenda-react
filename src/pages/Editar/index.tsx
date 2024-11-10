import React from 'react'
import Header from '../../containers/Header'
import FormularioEditar from '../../containers/FormularioEditar'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate, useNavigate } from 'react-router-dom'

const Editar = () => {
  const navigate = useNavigate()
  const idSelecionado = useSelector(
    (state: RootReducer) => state.contato.idSelecionado
  )

  return (
    <>
      <Header home={false} />
      {idSelecionado ? <FormularioEditar /> : <Navigate to={'/'} />}
    </>
  )
}
export default Editar
