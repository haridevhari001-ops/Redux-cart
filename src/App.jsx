import { Route,Routes } from 'react-router-dom'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='product/:id' element={<ProductView/>}></Route>      
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='/wish' element={<Wishlist/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
