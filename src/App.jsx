
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer"



function App() {
  return (
    <div id='app'>
      <div className='display-6'>
        <ItemListContainer bienvenida=" Bienvenido a la tienda oficial de Mike ✔" />
      </div>
      <NavBar />
    </div>
  )
}

export default App
