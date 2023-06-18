import React, {useContext} from 'react';
import './header.component.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../Assets/logo/books-duotone.svg";
import ShoppingCartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from "../cart/mini-cart-dropdown/cart-dropdown.component";
import {CartPopup} from "../contexts/cart-dropdown.context";


const Header = () => {
    const {isOpen} = useContext(CartPopup);

    return (
        <div className="header container">
            <div className="inner-container grid">
                <div className="col-1-2">
                    <div className="logo icon">
                        <Link to={'/'}>
                            <Logo/>
                        </Link>
                    </div>
                </div>
                <div className="col-1-2 content-right-aligned relative">
                    <div className="menu">
                        <Link to={"/shop"} className='menu-item shop-menu-item'>
                            Shop
                        </Link>
                        <Link to={"/products"} className='menu-item shop-menu-item'>
                            Products
                        </Link>
                        <Link to={"/reviews"} className='menu-item reviews-menu-item'>
                            Reviews
                        </Link>
                        <Link to={"/contact"} className='menu-item contact-menu-item'>
                            Contact
                        </Link>

                        <ShoppingCartIcon/>

                    </div>
                    {isOpen && <CartDropdown/>}
                </div>
            </div>
        </div>
    )
}
export default Header;