
import './App.css';
import Mensaje from './Mensaje.js'; // Importamos el componente Mensaje desde el archivo Mensaje.js

const Descripcion = () => {
  return <p>Esta es una evaluacion de JSX</p>
}

const App = () => {

  return (
    <div className="App">
       <Mensaje color='red' message='Probando' />
    <Mensaje color='red' message='Estamos trabajando' />
    <Mensaje color='green' message='En un curso' />
    <Mensaje color='blue' message='De react' />
    <Descripcion />
    </div> 
  )
}

export default App;
