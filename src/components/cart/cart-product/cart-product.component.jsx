import React, {useContext, useState} from "react";
import "./cart-product.component.scss";
import {CartPopups} from "../../contexts/cart-dropdown-reducer.context";
import {ReactComponent as Left} from "../../../Assets/shop-logos/chevron-left-duotone.svg";
import {ReactComponent as Right} from "../../../Assets/shop-logos/chevron-right-duotone.svg";
import {ReactComponent as Remove} from "../../../Assets/shop-logos/trash-duotone.svg";
import {WishlistContext} from "../../contexts/wishlist.context";
import {ReactComponent as AddToCart} from "../../../Assets/shop-logos/cart-circle-plus-duotone.svg";

const CartProduct = ({product, imgURL, name, type}) => {
    const {quantity, price} = product;
    const {addProductToCart} = useContext(CartPopups);
    const {decrementProductFromCart} = useContext(CartPopups);
    const {removeProductFromCart} = useContext(CartPopups);
    const {removeProductfromWishlist} = useContext(WishlistContext)

    return (
        <div className='cart-item row cart-product'>
            <div className="thumbnail column">
                <img src={imgURL} alt="" className="product-thumbnail"/>
            </div>
            <div className="item-info column">
                <h3>{name}</h3>

            </div>


            {type === 'cartProduct' ? (
                <>
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
                    <div className="item-remove column">
                <span className='icon' onClick={() => removeProductFromCart(product)}>
                <Remove/>
                </span>
                    </div>
                </>) : (
                <>
                    <div className="item-price column">
                        <span className="price">{price} $ </span>
                    </div>
                    <div className="item-add column">
                     <span className='icon' onClick={() => addProductToCart(product)}>
                <AddToCart/>
                </span>
                    </div>
                    <div className="item-remove column">
                     <span className='icon' onClick={() => removeProductfromWishlist(product)}>
                <Remove/>
                </span>
                    </div>
                </>
            )
            }

        </div>

    )
}

export default CartProduct;