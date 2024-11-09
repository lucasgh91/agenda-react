import Formulario from '../../containers/Formulario'
import Header from '../../containers/Header'

var React = require('react')

const Adicionar = () => {
  return (
    <>
      <Header adicionar={true} />
      <Formulario />
    </>
  )
}
export default Adicionar
