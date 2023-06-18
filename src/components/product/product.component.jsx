import React, {useContext, useState} from "react";
import './product.component.scss';
import {ReactComponent as AddToCart} from "../../Assets/shop-logos/cart-circle-plus-duotone.svg";
import {ReactComponent as AddedToCart} from "../../Assets/shop-logos/cart-circle-check-duotone.svg";
import {CartPopup} from "../contexts/cart-dropdown.context";


const Product = ({product, imgURL, name, description}) => {
    const {price} = product;
    const {addProductToCart} = useContext(CartPopup);
    const cartClick = () => {
       addProductToCart(product);
    }
    const {cartProducts} = useContext(CartPopup);
    return (
        <div className='product card '>
            <img src={imgURL} alt="" className="product-thumbnail"/>
            <h3 className="book-title"> {name}</h3>
            <p>{description}</p>
            <div className="product-footer">
                <div className="price">{price}$</div>
                <a onClick={cartClick} className="icon icon-button">
                    <AddToCart />
                    {/*{isAdded ? <AddedToCart /> : <AddToCart />}*/}
                </a>
            </div>
        </div>
    )
}
export default Product;