import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { excluir, alterarStatusExcluir } from '../../store/reducers/contato'
import Modal from './styles'
import { ButtonVerde, ButtonVermelho } from '../../utils/styles'

const ModalExcluir = () => {
  const dispatch = useDispatch()

  const paraExcluir = useSelector((state: RootReducer) => state.contato.excluir)
  const idSelecionado = useSelector(
    (state: RootReducer) => state.contato.idSelecionado
  )
  const contatos = useSelector((state: RootReducer) => state.contato.contatos)
  const contato = contatos.filter((c) => c.id === idSelecionado)

  return (
    <>
      {paraExcluir && (
        <Modal>
          <div>
            <h2>Confirmar exclusão</h2>
            <p>
              <b>Nome:</b> {contato[0].nome}
            </p>
            <p>
              <b>Telefone:</b> {contato[0].telefone}
            </p>
            <p>
              <b>E-mail:</b> {contato[0].email}
            </p>
            <p>
              <ButtonVerde onClick={() => dispatch(excluir())}>
                Confirmar
              </ButtonVerde>
              <ButtonVermelho onClick={() => dispatch(alterarStatusExcluir())}>
                Cancelar
              </ButtonVermelho>
            </p>
          </div>
        </Modal>
      )}
    </>
  )
}
export default ModalExcluir
