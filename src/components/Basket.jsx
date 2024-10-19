import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { caltulateBasket, setDrawer } from '../redux/slices/basketSlice';

export default function Basket() {
    const { basketProducts, drawer, totalAmount } = useSelector((store) => store.basket)
    const dispatch = useDispatch();

    useEffect(() => { dispatch(caltulateBasket()) }, [])
    return (
        <Drawer open={drawer} sx={{ padding: '20px' }} anchor='right' onClose={() => dispatch(setDrawer())} >
            {
                basketProducts && basketProducts.map((basket) => {
                    return (
                        <div>
                            <div key={basket.id} className='flex-row' style={{ padding: '20px' }}>
                                <img src={basket.image} style={{ marginRight: '5px' }} width={50} height={50} />
                                <p style={{ width: '320px', marginRight: '5px' }}>{basket.title
                                }({basket.count})</p>
                                <p style={{ fontWeight: 'bold ' }}>{basket.price} TL</p>
                                <button style={{ border: 'none', borderRadius: '5px', backgroundColor: 'red', color: 'white', padding: '5px', marginLeft: '12px', width: '50px' }}>Sil</button>
                            </div>

                        </div>

                    )
                })
            }
            <div>Toplam Tutar: {totalAmount}</div>
        </Drawer>
    )
}
