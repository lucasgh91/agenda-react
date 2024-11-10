import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

type stateType = {
  idSelecionado: number,
  excluir: boolean,
  contatos: ContatoClass[]
}

const initialState: stateType = {
  idSelecionado: 0,
  excluir: false,
  contatos: []
}

const ContatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContatoClass>) => {
      action.payload.id = state.contatos.length + 1
      state.contatos.push(action.payload)
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const index = state.contatos.findIndex(
        (c) => c.id === state.idSelecionado
      )
      state.contatos[index] = action.payload
    },
    editarIdSelecionado: (state, action: PayloadAction<number>) => {
      state.idSelecionado !== action.payload
        ? (state.idSelecionado = action.payload)
        : (state.idSelecionado = 0)
    },
    alterarStatusExcluir: (state) => {
      state.excluir = !state.excluir
    },
    excluir: (state) => {
      state.contatos = state.contatos.filter(
        (c) => c.id !== state.idSelecionado
      )
      state.idSelecionado = 0
      state.excluir = false
    }
  }
})

export const {
  adicionar,
  editar,
  excluir,
  alterarStatusExcluir,
  editarIdSelecionado
} = ContatoSlice.actions
export default ContatoSlice.reducer
