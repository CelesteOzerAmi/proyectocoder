
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={< ItemListContainer bienvenida=" Bienvenido a Mike ✔" />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer bienvenida=" Bienvenido a Mike ✔"/>}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
