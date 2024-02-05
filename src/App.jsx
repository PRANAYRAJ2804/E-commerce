import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory categoty="men"/>}/>
      <Route path='/womens' element={<ShopCategory categoty="women"/>}/>
      <Route path='/kids' element={<ShopCategory categoty="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path='/productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      {/* <Route path='*' element={<Error/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
