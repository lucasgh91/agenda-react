import React from 'react'
import ListaContatos from '../../containers/ListaContatos'
import Header from '../../containers/Header'
import ModalExcluir from '../../containers/ModalExcluir'

const Home = () => (
  <>
    <Header />
    <ListaContatos />
    <ModalExcluir />
  </>
)
export default Home
