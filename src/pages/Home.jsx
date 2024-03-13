/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Row, Col, Card,Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productSlice, { fetchProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  
  const dispatch=useDispatch()
  const { allProducts, error, loading } = useSelector(state => state.productReducer);
  console.log(allProducts, error, loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <div className='container-fluid ps-2' style={{ marginTop: '130px' }}>
      
        {loading?<div className='mt-5 text-center fw-bolder'><Spinner animation="border" variant="danger" />Loading...</div>
     

      : 
       <Row>
      
      
     {allProducts?.length>0?
      allProducts?.map(product=>(

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
      
      
          
        :<div className='fw-bolder text-primary mt-5 mb-5 fs-4'>Nothing to display!!</div>}
         
        </Row>
      }
      </div>
    </>
  )
}

export default Home