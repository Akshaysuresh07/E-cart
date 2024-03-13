import React from 'react'
import { Navbar,Nav,Container,Form,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const wishlistCount=useSelector(state=>state.wishlistReducer).length
  const cartCount=useSelector(state=>state.cartReducer).length
  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className="bg-primary position-fixed  top-0 w-100">
    <Container fluid>
      <Link to={'/'}><Navbar.Brand className='fs-4 fw-bolder' href="#"> E-cart</Navbar.Brand></Link>
  
   
     
        <Nav
          className="ms-auto pb-3   my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <Form className='me-5 mt-2 ' style={{width:'350px'}} >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
     
      </Form>
        <Nav.Link > <Link to={'/wishList'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}> <i  className="fa-solid fa-heart text-danger fa-xl  "></i>Favourites<Badge className='m-2'  bg="light">{wishlistCount}</Badge> </Link></Nav.Link>
        <Nav.Link > <Link to={'/cart'} style={{textDecoration:'none',color:'black', fontWeight:'bold'}}> <i className="fa-solid fa-cart-plus text-success fa-xl"></i>Cart<Badge className='m-2' bg="light">{cartCount}</Badge> </Link></Nav.Link>
         
         
        </Nav>
       
   
    </Container>
  </Navbar>
  )
}

export default Header