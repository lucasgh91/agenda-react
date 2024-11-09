import { createSlice } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

const initialState: ContatoClass[] = [
  {
    id: 0,
    nome: 'Lucas Ghizzo de Moraes',
    telefone: '48999025606',
    email: 'ghizzolucas@gmail.com'
  }
]

const ContatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state) => {
      console.log(state)
    }
  }
})

export const { adicionar } = ContatoSlice.actions
export default ContatoSlice.reducer
