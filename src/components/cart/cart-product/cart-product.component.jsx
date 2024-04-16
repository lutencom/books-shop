import React, {useContext, useState} from "react";
import "./cart-product.component.scss";
import {ReactComponent as Left} from "../../../Assets/shop-logos/chevron-left-duotone.svg";
import {ReactComponent as Right} from "../../../Assets/shop-logos/chevron-right-duotone.svg";
import {ReactComponent as Remove} from "../../../Assets/shop-logos/trash-duotone.svg";
import {WishlistContext} from "../../contexts/wishlist.context";
import {ReactComponent as AddToCart} from "../../../Assets/shop-logos/cart-circle-plus-duotone.svg";
import {addProductToCart, decrementProductFromCart, removeProductFromCart} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartProducts} from "../../store/cart/cart.selector";
import {removeProductfromWishlist} from "../../store/wishlist/wishlist.action";
import {wishListItemsSelector} from "../../store/wishlist/wishlist.selector";
import {Link} from "react-router-dom";
import {slugify} from "../../utils/slugify.utils";

const CartProduct = ({product, imgURL, name, type}) => {
    const {quantity, price, category_slug} = product;
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts);
    const wishListItems = useSelector(wishListItemsSelector);
    // const {removeProductfromWishlist} = useContext(WishlistContext)
    // const removeProductfromWishlist = useSelector(removeProductfromWishlist)
    const productNameSlug = slugify(name);
   const permalink = window.origin + '/shop/'+ category_slug + '/' + productNameSlug;
    return (
        <div className='cart-item row cart-product'>
            <Link to={permalink} state={{item:product}} className="product-body">

            <div className="thumbnail column">
                <img src={imgURL} alt="" className="product-thumbnail"/>
            </div>
            <div className="item-info column">
                <h3>{name}</h3>
            </div>
            </Link>

            {type === 'cartProduct' ? (
                <>
                    <div className="item-price column">
                        <span className="price">{price * quantity} $ </span>
                    </div>
                    <div className="item-quantity column">
                        <div className="quantity-block">
                            <span className='icon' onClick={() => dispatch(decrementProductFromCart(cartProducts, product))}><Left/> </span>
                            <span className='quantity'>&nbsp;{quantity}&nbsp;</span>
                            <span className='icon' onClick={() => dispatch(addProductToCart(cartProducts, product))}> <Right/></span>
                        </div>
                    </div>
                    <div className="item-remove column">
                <span className='icon' onClick={() => dispatch(removeProductFromCart(cartProducts, product))}>
                <Remove/>
                </span>
                    </div>
                </>) : (
                <>
                    <div className="item-price column">
                        <span className="price">{price} $ </span>
                    </div>
                    <div className="item-add column">
                     <span className='icon' onClick={() => dispatch(addProductToCart(cartProducts, product))}>
                <AddToCart/>
                </span>
                    </div>
                    <div className="item-remove column">
                     <span className='icon' onClick={() => dispatch(removeProductfromWishlist(wishListItems, product))}>
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