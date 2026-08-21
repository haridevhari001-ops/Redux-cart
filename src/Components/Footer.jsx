import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='bg-dark container-fluid p-3 text-light'>
          <div className='row'>
            <div className='col-sm-12 col-lg-4'>
              <h3 className='text-light'>REDUXCART</h3>
              <p style={{textAlign:"justify"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos earum, dolorum repudiandae nostrum cumque totam ratione unde obcaecati possimus quis illo. A corrupti repellat consequuntur debitis aliquid harum quibusdam voluptatem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi, atque aut minus itaque vitae mollitia adipisci dignissimos quaerat necessitatibus doloremque quod fuga distinctio at sit, sint inventore maxime eos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla minima reiciendis sapiente nisi obcaecati pariatur aliquam officiis similique? Voluptatibus iure aperiam consequuntur quam? Assumenda quos harum perspiciatis sunt numquam.
              </p>
            </div>

            <div className='col-sm-12 col-lg-4 d-flex flex-column align-items-center'>
              <h3 className='text-light'>Links</h3>
              <p><Link  className='text-light' to={'/'} >Home</Link></p>
              <p ><Link className='text-light' to={'/cart'}>Cart</Link></p>
              <p><Link className='text-light' to={'/wish'}>Wishlist</Link></p>
            </div>
            
            <div className='col-sm-12 col-lg-4'>
            <h3 className='text-light'>Contact US</h3>
            <ul>
              <li>Address: <b> Calicut,Kerala</b></li>
              <li>Phone: <b> 9876543211</b></li>
              <li>Email: <b> reduxcart@gmail.com</b></li>
            </ul>
            </div>
          </div>
          <h6 className='text-center text-light'>ReduxCart &copy ;2026 -Allrights Reserved</h6>
        </div>
  </>

  )

}

export default Footer