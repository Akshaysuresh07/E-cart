import Footer from './Components/Footer'

import WishList from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/wishList" element={<WishList/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/view/:id" element={<View/>} />
    <Route path="*" element={<Navigate to={'/'}/>} />


  </Routes>
  <Footer/>
     
    </>
  )
}

export default App
