import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import { Navigate } from 'react-router'

const PrivateRoute = ({authenticate}) => {
  return authenticate === true? <ProductDetail/> : <Navigate to="/login"/>
};

export default PrivateRoute
