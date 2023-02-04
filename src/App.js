import NavBar from '../src/Components/NavBar/Navbar';
import './App.css';
import ItemDetailContainer from './Container/ItemDetailContainer/index';
import ItemListContainer from './Container/ItemListContainer/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Container/CartContainer/Index';
import ShopProvider from './Context/shopProvider';


function App() {

  return (
    <ShopProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path='*' element={<h2>No se encontró la página</h2>}/>
      </Routes>
    </BrowserRouter>
    </ShopProvider>
  ); 
}

export default App;