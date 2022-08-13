
import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Formulario from './components/formulario';
import Time from './components/time';

function App() {

  const [funcionarios, setFuncionarios] = useState([])

  const cadastrarfuncionario = (funcionario) => {
    console.log(funcionario)
    setFuncionarios([...funcionarios, funcionario])

    

  }

  return (
    <>
      <Banner />
      <Formulario cadastrarFunc={funcionario => cadastrarfuncionario(funcionario)}/>
      <Time name="Programação"></Time>
      <Time name="Frontend"></Time>
      <Time name="Data Science"></Time>
    </>
  );
}

export default App;
