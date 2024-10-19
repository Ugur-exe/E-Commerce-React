import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import PageNotFound from '../components/PageNotFound'
export default function RouterConfig() {

    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}
