import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addProductToBasket, caltulateBasket } from '../redux/slices/basketSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { basketProducts } = useSelector((store) => store.basket);
  const { title, price, description, category, image, rating } = selectedProduct;
  const dispatch = useDispatch();

  let [count, setCount] = useState(0);

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      count
    }
    dispatch(addProductToBasket(payload))
    dispatch(caltulateBasket())
  }

  const findProductBasketInCount = () => {
    basketProducts && basketProducts.map((data) => {
      if (data.id === id) {
        setCount(count = data.count)
      } else {
        setCount(count = 0)
      }
    })
  }

  const increment = () => {
    setCount(count += 1)
  }
  const decrement = () => {
    if (count < 0 || count === 0) {
      return;
    } else {
      setCount(count -= 1)
    }
  }
  const countRules = () => {
    if (count < 0) {
      count = 0
    }
  }


  useEffect(() => {
    if (!products.length) {

      fetchProductById(id);
    } else {
      getProductById();
    }
    findProductBasketInCount();
  }, [id, products]);

  const fetchProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    dispatch(setSelectedProduct(data));
  };

  const getProductById = () => {
    const foundProduct = products.find((data) => data.id == id);
    if (foundProduct) {
      dispatch(setSelectedProduct(foundProduct));
    }
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }



  return (
    <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div style={{ marginRight: '40px' }}>
        <img src={image} width={150} alt="" />
      </div>

      <div>
        <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
        <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
        <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'red' }}>
          {price}₺</h1>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CiCirclePlus style={{ fontSize: '40px', marginRight: '10px' }} onClick={increment} /> <span style={{ fontSize: '35px' }} > {count} </span> <CiCircleMinus style={{ fontSize: '40px', marginLeft: '10px' }} onClick={decrement} />
        </div>

        <div>
          <button onClick={addBasket} style={{ marginTop: '25px', border: 'none', padding: '15px', backgroundColor: 'rgb(240, 101, 101)', color: 'white', fontWeight: 'bold', borderRadius: '12px' }}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}
