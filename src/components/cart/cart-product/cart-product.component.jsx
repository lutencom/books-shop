import React, {useContext, useState} from "react";
import "./cart-product.component.scss";
import {CartPopup} from "../../contexts/cart-dropdown.context";
import {ReactComponent as Left} from "../../../Assets/shop-logos/chevron-left-duotone.svg";
import {ReactComponent as Right} from "../../../Assets/shop-logos/chevron-right-duotone.svg";
import {ReactComponent as Remove} from "../../../Assets/shop-logos/trash-duotone.svg";

const CartProduct = ({product, imgURL, name}) => {
    const {quantity, price} = product;
    const {addProductToCart} = useContext(CartPopup);
    const {decrementProductFromCart} = useContext(CartPopup);
    const {removeProductFromCart} = useContext(CartPopup);
    return (
        <div className='cart-item row cart-product'>
            <div className="thumbnail column">
                <img src={imgURL} alt="" className="product-thumbnail"/>
            </div>
            <div className="item-info column">
                <h3>{name}</h3>

            </div>
            <div className="item-price column">
                <span className="price">{price * quantity} $ </span>
            </div>
            <div className="item-quantity column">
                <div className="quantity-block">
                    <span className='icon' onClick={() => decrementProductFromCart(product)}><Left/> </span>
                    <span className='quantity'>&nbsp;{quantity}&nbsp;</span>
                    <span className='icon' onClick={() => addProductToCart(product)}> <Right/></span>
                </div>
            </div>
            <div className="item-remove column" >
                <span className='icon' onClick={() => removeProductFromCart(product)}>
                <Remove/>
                </span>
            </div>
        </div>

    )
}

export default CartProduct;