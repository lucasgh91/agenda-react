import { configureStore } from '@reduxjs/toolkit'
import ContatoReducer from './reducers/contato'

export const store = configureStore({
  reducer: {
    contato: ContatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
