import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import Footer from './layout/Footer';
import Header from './layout/Header';
import BoardWrite from './pages/BoardWrite';
import ProductDetail from './pages/ProductDetail';
import Main from './pages/Main';
function App() {
  return (
    <div className="bg-gray-100">
      <Header/>
        <Router>
          <Routes>
           <Route path='/' element={<Main/>}/>
           <Route path='/write' element={<BoardWrite/>}/>
           <Route path='/product/:id' element={<ProductDetail/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
