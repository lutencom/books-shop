import React, {useContext} from "react";
import "./cart-icon.component.scss";
import {ReactComponent as CartIcon} from "../../../Assets/shop-logos/bag-shopping-duotone.svg";
import {CartPopup} from "../../contexts/cart-dropdown.context";

const ShoppingCartIcon = () => {
    const {isOpen} = useContext(CartPopup);
    const {togglePopup} = useContext(CartPopup);
    const {cartProducts} = useContext(CartPopup);
    const {cartTotal} = useContext(CartPopup);
    const toggleClick = () => {
        togglePopup(!isOpen)
    }
    ///old way
    let add = 0;
    const totalsQuantity = cartProducts.map((product) => {
            const amount = product.quantity;
            add += amount;
        }
    )
    ///

    return (
        <div onClick={toggleClick} className='menu-item cart-menu-item'>
            <div className="cart-icon-container icon">
                <CartIcon className="cart-icon"/>
                <span className="counter">{cartTotal}</span>
            </div>
        </div>
    )
}

export default ShoppingCartIcon;