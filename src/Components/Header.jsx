import React from 'react'
import { Navbar,Nav,Container,Form,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/productSlice'


  function Header({insideHome }) {
    const dispatch=useDispatch()
      const wishlistCount=useSelector(state=>state.wishlistReducer).length
  const cartCount=useSelector(state=>state.cartReducer).length
  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className="bg-primary position-fixed  top-0 w-100">
    <Container fluid>
      <Link to={'/'}><Navbar.Brand className='fs-4 fw-bolder text-light' href="#"> E-cart</Navbar.Brand></Link>
  
   
     
      <Nav
          className="ms-auto pb-3   my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        {insideHome&&<Nav.Link  >
        <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}   className='form-control rounded me-3 p-2' placeholder='search products...' style={{width:'410px'}}></input></Nav.Link>
        }
        <Nav.Link > <Link to={'/wishList'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}> <i  className="fa-solid fa-heart text-danger fa-xl  "></i>Favourites<Badge className='m-2'  bg="secondary">{wishlistCount}</Badge> </Link></Nav.Link>
        <Nav.Link > <Link to={'/cart'} style={{textDecoration:'none',color:'white', fontWeight:'bold'}}> <i className="fa-solid fa-cart-plus text-success fa-xl"></i>Cart<Badge className='m-2' bg="secondary">{cartCount}</Badge> </Link></Nav.Link>
         
         
        </Nav>
       
   
    </Container>
  </Navbar>
  )
}

export default Header