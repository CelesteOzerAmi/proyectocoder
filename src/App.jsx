
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer"



function App() {
  return (
    <div id='app'>
      <ItemListContainer bienvenida=" Bienvenido a la tienda oficial de Mike ✔" />
      <NavBar />
    </div>

  )
}

export default App
