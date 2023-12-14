
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"



function App() {
  return (
    <div id='app'>
      <NavBar />
      <ItemListContainer bienvenida=" Bienvenido a la tienda oficial de Mike ✔" />
      <ItemCount stock = { 5 } />
    </div>
  );
}

export default App
