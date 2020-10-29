import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    
    const pageNumber =  match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
      <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>
        Go Back
        </Link>}
        <br />
          <h1 style={{'textAlign': 'center'}}>Butcher's Shop</h1>
          <p style={{'textAlign': 'center'}}>This is an online store built with MongoDB, Express, React and Node. 
          It allows customers to place an order and create a profile.  Customers are able to rate and comment on products. 
          It includes a basic inventory system to keep orders organized and can be connected to a payment gateway such as PayPal. 
          This online store is available now and can be fully customized to accomodate retailers to sell 'B to B' or 'B to C'. </p>
          <br />
          <p style={{'textAlign': 'center'}}>
            To demo the app, feel free to sign in using 'admin@butcher.com' as the email and 'butcher100' as the password.
          </p>
          <br />
          <p style={{'textAlign': 'center'}}>
            Please contact Manny at mannycortezstudios@gmail.com for more information. 
          </p>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
            <>
            <Row>
            {products.map((product) => (
                    <Col key={ product._id }sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
            ))}     
          </Row>
          <Paginate 
            pages={pages} 
            page={page} 
            keyword={keyword ? keyword : ''}/>
          </>
          )}  
      </>
    )
}

export default HomeScreen
