import React, {useContext} from "react";
import "./cart-icon.component.scss";
import {ReactComponent as CartIcon} from "../../../Assets/shop-logos/bag-shopping-duotone.svg";
import {CartPopups} from "../../contexts/cart-dropdown-reducer.context";
import {useDispatch, useSelector} from "react-redux";
import {selectTogglePopup, selectCartTotal} from "../../store/cart/cart.selector";
import {togglePopupAction} from "../../store/cart/cart.action";

const ShoppingCartIcon = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectTogglePopup);
    const cartTotal = useSelector(selectCartTotal);
    const toggleClick = () => {
        dispatch(togglePopupAction(!isOpen))
    }

    return (
        <div onClick={toggleClick} className='menu-item cart-menu-item'>
            <div className="cart-icon-container icon">
                <CartIcon className="cart-icon shopping-cart"/>
                <span className="counter">{cartTotal}</span>
            </div>
        </div>
    )
}

export default ShoppingCartIcon;