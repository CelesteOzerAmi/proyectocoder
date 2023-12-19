
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"



function App() {
  return (
    <div id='app' className='app'>
      <NavBar />
      <ItemListContainer bienvenida=" Bienvenido a la tienda oficial de Mike ✔" />
    </div>
  );
}

export default App
