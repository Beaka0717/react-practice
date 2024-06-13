import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {


  
  // 6. 로그아웃을 놀렸을 경우 로그아웃 된다
  // 7. 로그아웃이되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
  // 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
  // 9. 상품을 검색할 수 있다
  const[authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate}/>
      <Routes>
      <Route path='/' element={<ProductAll/>}/>
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
