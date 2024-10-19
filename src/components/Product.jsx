import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'


export default function Product({ products }) {


    const { id, title, price, description, category, image, rating } = products
    const { rate, count } = rating

    const navigate = useNavigate();
    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center', marginTop: '25px' }}>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına Git</button>
            </div>
        </div>
    )
}
