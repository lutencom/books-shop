import React, {useContext, useEffect, useRef, useState} from 'react';
import './header.component.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../Assets/logo/books-duotone.svg";
import {ReactComponent as MobileMenuIcon} from "../../Assets/menu/bars-duotone.svg";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";

import ShoppingCartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from "../cart/mini-cart-dropdown/cart-dropdown.component";
import {CartPopups} from "../contexts/cart-dropdown-reducer.context";
import Menu from "./menu.component";
import WishlistIcon from "../wishlist/wishlistIcon";
import {WishlistContext} from "../contexts/wishlist.context";
import WishlistPopup from "../wishlist/wishlistPopup";
import {selectTogglePopup} from "../store/cart/cart.selector";
import {useSelector, useDispatch} from "react-redux";
import {togglePopupAction} from "../store/cart/cart.action"


const Header = () => {

    const {isOpen} = useSelector(selectTogglePopup);

    const {isWishListOpen} = useContext(WishlistContext);
    const [isMobileMenuOpen, openMobileMenu] = useState(false);
    const mobileMenuHandler = () => {
        openMobileMenu(!isMobileMenuOpen);
    }
    const closeMobileMenuHandler = () => {
        openMobileMenu(false);
    }

    const [layout, setLayout] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setLayout(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    })
    const screenLayout = layout > 767
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

                    {screenLayout ?
                        <div className="menu desktop-menu">
                            <Menu/>
                            <WishlistIcon/>
                            <ShoppingCartIcon/>
                        </div> :
                        <div onClick={mobileMenuHandler} className="mobile-menu-icon icon"><MobileMenuIcon/></div>
                    }

                    {isOpen && <CartDropdown/>}
                    {isWishListOpen && <WishlistPopup/>}
                </div>
            </div>
            {isMobileMenuOpen && <div className='mobile-menu card'>
                <div onClick={closeMobileMenuHandler} className="close-menu-icon icon"><CloseIcon/></div>
                <Menu/>
            </div>}
        </div>

    )
}
export default Header;