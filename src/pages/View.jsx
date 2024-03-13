/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'

import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItems } from '../redux/slice/WishlistSlice'
import { addtoCart } from '../redux/slice/CartSlice'



function View() {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  
  const[product,setProducts]=useState({})
  const {id}=useParams()
  // console.log(id);
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
      setProducts(allProducts.find(item=>item.id==id))

    }
  },[])
  const handleWishlist=(product)=>{
    if(wishlist?.includes(product)){
      alert('item already in wislist')

     } 
     else{
      dispatch(addWishlistItems(product))


     }
    
  }
  const handleAddtoCart=()=>{
    const existingProduct=cart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addtoCart(product))
      alert("products added to cart!!")
      
    }
    else{
      dispatch(addtoCart(product))
      alert("product added to cart")
    }
   
    
    

  }

  console.log(product);
  return (
    <>
      <Header />
       <div className='container' style={{ marginTop: '120px' }}>
        <div className='row mb-5'>
          <div className='col-lg-6'>
            <img  style={{ height: '350px', width: '400px', borderRadius:'8px' }} src={product?.thumbnail} alt="product" className='img-fluid shadow' />

          </div>
          <div className='col-lg-6'>
            <h5>PID:{product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3>{product?.price}</h3>
            <p style={{ textAlign: 'justify',fontStyle:'italic' }}><b>Description :</b> {product?.description} </p>
            <div className='d-flex justify-content-center'>
              <button   onClick={()=>handleAddtoCart(product)}  style={{borderWidth:" 1px 1px 1px 1px"}}  className='btn btn-outline-success pe-3  me-4  '><i className="fa-solid fa-cart-plus me-2  "></i>Add to Cart </button>
              <button  onClick={()=>handleWishlist(product)}  style={{borderWidth:" 1px 1px 1px 1px"}} className='btn btn-outline-danger '><i className="fa-solid fa-heart me-2  "></i>Add to Wishlist </button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default View