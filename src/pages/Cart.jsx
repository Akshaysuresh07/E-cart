/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { descQuantity, emptyCart, incQuantity, removeCart } from '../redux/slice/CartSlice'


function Cart() {
  const dispatch=useDispatch()
  const cartItems =useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState(0)
  useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }
    else{
      setCartTotal(0)
    }

  },[cartItems])
  const handleDecrementQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(descQuantity(product.id))
    }
    else{
      dispatch(removeCart(product.id))
    }
  }
  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:'100px'}}>
  { cartItems?.length>0?
    <div className='pt-5'>
    <h1 className='text-center'>Cart summary</h1>
    <div className='row mt-5'>
    <div className='col-lg-8'>
    <table className='table'>
    <thead>
    <tr>
    
    <th>#</th>
    <th>Title</th>
    <th>Image</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>...</th>
    </tr>
    </thead>
    <tbody>
   {
    cartItems?.map((product,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{product.title.slice(0,16)}..</td>
    <td><img style={{height:'80px',width:'70px'}} src={product.thumbnail} alt="product" className='img-fluid' /></td>
    <td><div className='d-flex '>
    <i  onClick={()=>handleDecrementQuantity(product)} className="fa-solid fa-minus p-2"></i>
    <input value={product.quantity} type='readonly' className='form-control' placeholder='1' style={{width:'40px',height:'60'}}/>
  <i onClick={()=>dispatch(incQuantity(product.id))} className="fa-solid fa-plus p-2"></i>

    </div></td>
    <td>${product.totalPrice}</td>
    <td><button className='btn btn-outline-secondary shadow' onClick={()=>dispatch(removeCart(product.id))}><i className="fa-solid fa-trash text-danger"></i></button></td>
    </tr>
   ))
  }

    </tbody>
    </table>
    <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Clear Cart</button>
    <button  className='btn btn-success ms-3'>Shop More</button>

    </div>
    <div className='col-lg-4'>
    <div className='container shadow border border-2 rounded-2 border-secondary ' style={{height:'300px',width:'450px'}}>
      <h1 className='text-center '>Check Out</h1>
      <div className='mt-5 ms-3'>
        <h4>Total item :<span className='text-danger'>{cartItems?.length}</span></h4>
        <h4>Total Price:<span className='text-danger'>${cartTotal}</span></h4>
        <button className='btn btn-success w-100 mt-3'>Check Out</button>
      </div>
    </div>
    </div>
    </div>
    </div>
:
     <div className='w-100 d-flex justify-content-center align-item-center' style={{height:'70vh'}}>
    <img src="https://www.bing.com/th/id/OGC.7a61d43e9897d56a9d07c3410da472a0?pid=1.7&rurl=https%3a%2f%2fwww.recoveryguide.net%2fwp-content%2fuploads%2f2018%2f07%2fanimat-shopping-cart-color.gif&ehk=Hi5BXfpsUIRZcu04Wsq564Opyuf6oMCfza7L64g8FuQ%3d" alt="product" className='img-fluid' />
    </div>}
    </div>
    </>
  )
}

export default Cart