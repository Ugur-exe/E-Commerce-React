import React from 'react'
import logo from '../images/logo.png'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

export default function Header() {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { basketProducts } = useSelector((store) => store.basket)


    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src={logo} onClick={() => navigate('/')} />
                <p className='logo-text'>E-Commerce</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='Bir şeyler ara' />
                <div>
                    {theme ? <CiLight className='icon' onClick={changeTheme} /> : <FaMoon className='icon' onClick={changeTheme} />}


                    <Badge badgeContent={basketProducts.length} color="error" >
                        <CiShoppingBasket onClick={() => dispatch(setDrawer())} style={{ marginRight: '6px' }} className='icon' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}
