import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {Container,Row,Col} from 'react-bootstrap';


const ProductDetail = () => {
  let{id} = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/Beaka0717/react-practice/product/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(()=> {
    getProductDetail()
  }, [])
  
  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
          <img src={product?.img}/>
          </Col>
          <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
