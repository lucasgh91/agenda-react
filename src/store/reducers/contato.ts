import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

const initialState: ContatoClass[] = []

const ContatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContatoClass>) => {
      action.payload.id = state.length
      state.push(action.payload)
    }
  }
})

export const { adicionar } = ContatoSlice.actions
export default ContatoSlice.reducer
