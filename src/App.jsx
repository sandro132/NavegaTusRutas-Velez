import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App
