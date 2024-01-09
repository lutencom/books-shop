import {Link} from "react-router-dom";
import React from "react";
import './header.component.scss'
const Menu = () => {
    return(
        <>
            <Link to={"/shop"} className='menu-item shop-menu-item'>
                Shop
            </Link>
            <Link to={"/products"} className='menu-item shop-menu-item'>
                Products
            </Link>
            <Link to={"/reviews"} className='menu-item reviews-menu-item'>
                Reviews
            </Link>
            <Link to={"/components"} className='menu-item reviews-menu-item'>
                Different Components
            </Link>
            <Link to={"/contact"} className='menu-item contact-menu-item'>
                Contact
            </Link>

        </>
    )
}
export default Menu