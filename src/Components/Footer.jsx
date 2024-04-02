import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-primary mt-5 w-100 ' style={{ height:'300px'}}>
        <div className='footer-content  d-flex justify-content-between'>
         <div style={{width:'400px'}} className='mt-4 '  >
         <h5 className='d-flex fw-bold text-light'>E-Cart</h5>
            <p className='text-white' style={{textAlign:'justify',fontStyle:'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id. 
             Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
             Mi tempus imperdiet nulla malesuada pellentesque. Id aliquet risus feugiat in ante. 
             Sit amet est placerat in egestas erat imperdiet sed.</p>
         </div>
         <div className='links d-flex flex-column mt-4' >
            <h5 className='fw-bold text-white'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/wishList'} style={{textDecoration:'none',color:'white'}}>Favourites</Link>
            <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart </Link>
         </div>
         <div className='guides d-flex flex-column mt-4' >
         <h5 className='fw-bold text-white'>Guides</h5>
         <a href='#' style={{textDecoration:'none',color:'white'}}>Payment </a>
         <a href='#' style={{textDecoration:'none',color:'white'}}>Shipping</a>
         <a href='#' style={{textDecoration:'none',color:'white'}}>Cancelation & Return</a>

         </div>
         <div className='contact mt-4' >
         <h5 className='fw-bold text-white'>Contact</h5>
         <div className='d-flex'>
         <input type='text' className='form-control me-1' placeholder='email'/>
            <button className='btn btn-dark'><i className='fa-solid fa-arrow-right'></i></button>
         </div>
         
         </div>
        
        </div>
        <p className='text-center text-white'> copyright &copy;2024 e-cart</p>
    </div>
  )
}

export default Footer