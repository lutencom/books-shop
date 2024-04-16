import React, {useContext, useState} from "react";
import './product.component.scss';
import {ReactComponent as AddToCart} from "../../Assets/shop-logos/cart-circle-plus-duotone.svg";
import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-sharp-regular.svg";
import {ReactComponent as AddedToWishList} from "../../Assets/shop-logos/heart-solid.svg";
import {ReactComponent as AddedToCart} from "../../Assets/shop-logos/cart-circle-check-duotone.svg";
import {CartPopups} from "../contexts/cart-dropdown-reducer.context";
import {WishlistContext} from "../contexts/wishlist.context";
import {addProductToCart} from "../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartProducts} from "../store/cart/cart.selector";
import {wishListItemsSelector, toggleAddOrRemoveWishlist} from "../store/wishlist/wishlist.selector";
import {addItemsToWishList, removeProductfromWishlist} from "../store/wishlist/wishlist.action";
import {Link} from "react-router-dom";
import {slugify} from "../utils/slugify.utils";

const Product = ({product, productCategory, imgURL, name, description}) => {
    const dispatch = useDispatch();
    const {price} = product;
    const cartProducts = useSelector(selectCartProducts);
    const wishListItems = useSelector(wishListItemsSelector)
    const cartClick = () => {
        dispatch(addProductToCart(cartProducts, product));
    }
    const addToWishLists = () => {
        dispatch(addItemsToWishList(wishListItems, product))
    }
    const removeFromWishlist = () => {
        dispatch(removeProductfromWishlist(wishListItems, product))
    }
    const isAlreadyInCart = cartProducts.find((item) => item.id === product.id);
    const isAlreadyInWishlist = wishListItems.find((item) => item.id === product.id);
    const productNameSlug = slugify(name);
    const permalink = window.origin + '/shop/'+ productCategory + '/' + productNameSlug;

    return (
        <div className={isAlreadyInCart ? 'product-added-in-cart product card' : 'product card'}>
            <div className={isAlreadyInWishlist ? "img-product product-added-in-wishlist" : "img-product"}>
                <img src={imgURL} alt="" className="product-thumbnail"/>
                <a onClick={isAlreadyInWishlist ? removeFromWishlist : addToWishLists}
                   className='icon icon-button wish-icon'>
                    {isAlreadyInWishlist ? <AddedToWishList/> : <AddToWishList/>}
                </a>
            </div>
            <Link to={permalink} state={{item:product}} className="product-body">
                <h3 className="book-title"> {name}</h3>
                <p>{description}</p>
            </Link>
            <div className="product-footer">
                <div className="price">{price}$</div>
                <a onClick={cartClick} className="icon icon-button">
                    {isAlreadyInCart ? <AddedToCart/> : <AddToCart/>}
                </a>

            </div>
        </div>
    )
}
export default Product;