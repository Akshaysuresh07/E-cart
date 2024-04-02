/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Header from '../Components/Header'
import { Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {removeWishlist} from '../redux/slice/WishlistSlice'
import { addtoCart } from '../redux/slice/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const WishlistItems = useSelector(state => state.wishlistReducer)
  const handleAddtoCart=(product)=>{
    const existingProduct=cart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addtoCart(product))
      dispatch(removeWishlist(product.id))
      toast.success("products added to cart!!")
      
    }
    else{
      dispatch(addtoCart(product))
      dispatch(removeWishlist(product.id))
      toast.success("product added to cart")
    }
   
    
    

  }
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '130px' }}>


        {WishlistItems?.length > 0 ?
        <Row>
           {WishlistItems?.map(product=>(

          
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title.slice(0,16)}</Card.Title>
                  <div className='d-flex justify-content-between'>
                    <button onClick={()=>dispatch(removeWishlist(product?.id))} className='btn'><i className="fa-solid fa-heart-circle-xmark text-primary"></i></button>
                    <button onClick={()=>handleAddtoCart(product)} className='btn'><i className="fa-solid fa-cart-plus  text-success"></i></button>
                  </div>


                </Card.Body>
              </Card>
            </Col>))}
        </Row>
       :  <>
       <h3 className='text-center fw-bolder mt-2'>No Favourites Found</h3>

       <div className=' d-flex flex-column justify-content-center align-items-center' style={{ height: '70vh' }}>
   
       <img src="https://www.bing.com/th/id/OGC.7a61d43e9897d56a9d07c3410da472a0?pid=1.7&rurl=https%3a%2f%2fwww.recoveryguide.net%2fwp-content%2fuploads%2f2018%2f07%2fanimat-shopping-cart-color.gif&ehk=Hi5BXfpsUIRZcu04Wsq564Opyuf6oMCfza7L64g8FuQ%3d" alt="product" className='img-fluid' />
            
        </div>
       </>     
        }
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />



    </>
  )
}

export default Wishlist