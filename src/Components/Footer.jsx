import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-primary mt-5 w-100 ' style={{ height:'300px'}}>
        <div className='footer-content  d-flex justify-content-between'>
         <div style={{width:'400px'}} className='mt-4 '  >
         <h5 className='d-flex fw-bold'>E-Cart</h5>
            <p style={{textAlign:'justify',fontStyle:'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id. 
             Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
             Mi tempus imperdiet nulla malesuada pellentesque. Id aliquet risus feugiat in ante. 
             Sit amet est placerat in egestas erat imperdiet sed.</p>
         </div>
         <div className='links d-flex flex-column mt-4' >
            <h5 className='fw-bold'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watch History </Link>
         </div>
         <div className='guides d-flex flex-column mt-4' >
         <h5 className='fw-bold'>Guides</h5>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React js</a>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React Routing </a>
         <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>

         </div>
         <div className='contact mt-4' >
         <h5 className='fw-bold'>Contact</h5>
         <div className='d-flex'>
         <input type='text' className='form-control me-1' placeholder='email'/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
         </div>
         
         </div>
        
        </div>
        <p className='text-center'> copyright &copy;2024 media Player.Build with React</p>
    </div>
  )
}

export default Footer