import React from 'react'
import { useDispatch } from 'react-redux'
import { alterarStatusExcluir } from '../../store/reducers/contato'

type Props = {
  children: string
}

const BotaoExcluir = ({ children }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(alterarStatusExcluir())}>
        {children}
      </button>
    </>
  )
}

export default BotaoExcluir
