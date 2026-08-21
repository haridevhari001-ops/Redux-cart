import React,{useState} from "react"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { FaOpencart } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux"
import Wishlist from "../pages/Wishlist"
import { searchProducts } from "../redux/slices/productSlice"



function Header() {

  const cart = useSelector(state => state.cartReducer.cart);
  const wishlist = useSelector(state=>state.wishlistReducer.wishlist);

   const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const wishlistCount = wishlist.length;

  return (
    <Navbar className="bg-body-teritary">
      <Container>
        <Navbar.Brand href='/'>
          <FaOpencart className="text-danger" style={{fontSize:'25'}}/>
          {' '}
          REDUXCART
        </Navbar.Brand>
        <input type='search'onChange={(e)=>{dispatchEvent(searchProducts(e.target.value))}} placeholder="Enter Keywords to search" className="form-control w-50 border border-dark"/>
        <div className="d-flex gap-3">
          <Link to={'/cart'} className="btn btn-outline-dark"><FaShoppingCart size={20} className="text-success" />{' '}Cart{' '}<span className="bg-dark badge">{cartCount}</span></Link>
          <Link to={'/wish'} className="btn btn-outline-dark"><FaHeart size={20} className="text-danger" />{' '}Wishlist{' '}<span className="bg-dark badge">{wishlistCount}</span></Link>
          </div> 
      </Container>
    </Navbar>
  )
}
     

export default Header