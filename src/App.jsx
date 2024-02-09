import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from '../src/Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])
 

  return (
    <>
   
    {
      loading ? 
      <div className="app">
      <HashLoader
        color={'#5e8caa'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      : 
    
    <BrowserRouter basename="/E-commerce/">
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Shop/>}/>
      <Route exact path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route exact path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route exact path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route exact path='/product' element={<Product/>}>
        <Route exact path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
}

    </>
  )
}

export default App


