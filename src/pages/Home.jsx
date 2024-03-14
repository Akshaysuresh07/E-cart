/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row, Col, Card,Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productSlice, { fetchProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  
  const dispatch=useDispatch()
  const { allProducts, error, loading } = useSelector(state => state.productReducer);
  // console.log(allProducts, error, loading);
  const [currentPage,setCurrentPage]=useState(1)
  const productperPages=8
  const totalPages=Math.ceil(allProducts?.length/productperPages)
  const latsProductIndex=currentPage*productperPages
  const firstProductIndex=latsProductIndex-productperPages
  const visibleCards=allProducts?.slice(firstProductIndex,latsProductIndex)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const navigateToNext=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }

  }
  const navigateToPrev=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome />
      <div className='container-fluid ps-2' style={{ marginTop: '130px' }}>
      
        {loading?<div className='mt-5 text-center fw-bolder'><Spinner animation="border" variant="danger" />Loading...</div>
     

      : 
       <Row>
      
      
     {allProducts?.length>0?
      visibleCards?.map(product=>(

        <Col  className='mb-5  ' sm={12} md={6} lg={4} xl={3} >

            <Card className='shadow rounded ms-3'  style={{ width: '18rem' }}>
              <Card.Img   style={{height:'180px'}} variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title.slice(0,15)}..</Card.Title>
                <div className='text-center'>   <Link to={`/view/${product?.id}`} variant="primary">View more..</Link></div>
              </Card.Body>
            </Card>
          </Col>
        
      ))   
      
      
          
        :<div className='fw-bolder text-center text-danger mt-5 mb-5 fs-4'>No product found..</div>}
         
        </Row>
      }
      <div className='d-flex justify-content-center align-item-center mt-5 ms-4'>
        <span onClick={navigateToPrev} style={{cursor:'pointer'}}><i className='fa-solid fa-backward ms-5'></i></span>
        <span className='fw-bolder ms-4' style={{cursor:'pointer'}}>{currentPage} of {totalPages}</span>
        <span onClick={navigateToNext}  style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-5'></i></span>
      </div>
     
      </div>
    </>
  )
}

export default Home