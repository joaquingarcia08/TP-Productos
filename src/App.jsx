import { useState } from 'react'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Manufacturers from './pages/Manufacturers.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/fabricantes" element={<Manufacturers />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
