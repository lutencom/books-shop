import React, {useContext} from "react";
import "./cart-dropdown.component.scss";
import {CartPopups} from "../../contexts/cart-dropdown-reducer.context";
import CartProducts from "../mini-cart-product/mini-cart-product.component";
import {ReactComponent as CloseIcon} from "../../../Assets/shop-logos/xmark-solid.svg";

import {Link} from 'react-router-dom';
import Product from "../../product/product.component";

const CartDropdown = () => {
    const {cartProducts} = useContext(CartPopups);
    const {toggleClick} = useContext(CartPopups);

    return (
        <div className="cart-dropdown card" id="cartDropdown">
            <div className="closeIcon"><CloseIcon onClick={toggleClick}/></div>
            <div className="cart-dropdown-title"><h3>Cart products</h3></div>
            <div className="cart-products">
                {cartProducts.map((product) => <CartProducts key={product.id} name={product.name || product.title} imgURL = {product.imageUrl || product.thumbnail} product={product} /> )}
            </div>
            <Link onClick={toggleClick} to={"/cart"} className='menu-item cart-menu-item button outline'>
                Go to cart
            </Link>

        </div>
    )
}
export default CartDropdown;