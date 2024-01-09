import React, {useContext, useState} from "react";
import './product.component.scss';
import {ReactComponent as AddToCart} from "../../Assets/shop-logos/cart-circle-plus-duotone.svg";
import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-sharp-regular.svg";
import {ReactComponent as AddedToCart} from "../../Assets/shop-logos/cart-circle-check-duotone.svg";
import {CartPopups} from "../contexts/cart-dropdown-reducer.context";
import {WishlistContext} from "../contexts/wishlist.context";


const Product = ({product, imgURL, name, description}) => {

    const {price} = product;
    const {addProductToCart, cartProducts} = useContext(CartPopups);
    const {addItemToWishlist} = useContext(WishlistContext);
    const cartClick = () => {
        addProductToCart(product);
    }
    const addToWishLists = () => {
        addItemToWishlist(product);
    }
    const isAlreadyPresent = cartProducts.find((item) => item.id === product.id);
    return (
        <div className={isAlreadyPresent ? 'isProductAdded product card' : 'product card'}>
            <div className="img-product">
                <img src={imgURL} alt="" className="product-thumbnail"/>
                <a onClick={addToWishLists} className="icon icon-button wish-icon">
                    <AddToWishList/>
                </a>
            </div>
            <h3 className="book-title"> {name}</h3>
            <p>{description}</p>
            <div className="product-footer">
                <div className="price">{price}$</div>
                <a onClick={cartClick} className="icon icon-button">
                    {isAlreadyPresent ? <AddedToCart/> : <AddToCart/>}
                </a>

            </div>
        </div>
    )
}
export default Product;