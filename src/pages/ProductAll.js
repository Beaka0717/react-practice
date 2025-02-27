import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  const getProducts = async()=>{
    let searchQuery=query.get('q') || ""
    let url = `https://my-json-server.typicode.com/Beaka0717/react-practice/products?q=${searchQuery}`
    let response = await fetch (url)
    let data = await response.json()
    setProductList(data)
  }
  useEffect(() => {
    getProducts()
  }, [query])
  return (
    <div className='product'>
      <Container>
      <Row>
      {productList.map(menu => <Col lg={3} md={4}><ProductCard item={menu}/></Col> )}
        
        
       
      </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll
