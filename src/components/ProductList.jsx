import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';
export default function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div className='flex-row' style={{flexWrap:'wrap',marginTop:'25px'}}>
            {products && products.map((data) => (
                <Product key={data.id} products={data} />
            ))}
        </div>
    )
}
