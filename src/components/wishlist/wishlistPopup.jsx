import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-duotone.svg";
import React, {useContext} from "react";
import {WishlistContext} from "../contexts/wishlist.context";
import {CartPopups} from "../contexts/cart-dropdown-reducer.context";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/xmark-solid.svg";
import CartProducts from "../cart/mini-cart-product/mini-cart-product.component";
import {Link} from "react-router-dom";
import {openWishListPopup} from "../store/wishlist/wishlist.action"
import {useDispatch, useSelector} from "react-redux";
import {wishListItemsSelector, wishListPopup} from "../store/wishlist/wishlist.selector";

const WishlistPopup = () => {
    const wishlistItems = useSelector(wishListItemsSelector)
    const dispatch = useDispatch();
    const isWishListPopupOpen = useSelector(wishListPopup); //selectorul pentru isWishlstPopupOpen
    const toggleWishListPopup = () => {
        dispatch(openWishListPopup(!isWishListPopupOpen)); //initiaza modificarea valorii !isWishlistPopupOpen
    }

    return (
        <div className="cart-dropdown card" >
            <div className="closeIcon"><CloseIcon onClick={toggleWishListPopup}/></div>
            <div className="cart-dropdown-title"><h3>Wishlist products</h3></div>
            <div className="cart-products">
                {wishlistItems.map((product) => <CartProducts type = 'wishlistItem' key={product.id} name={product.name || product.title} imgURL = {product.imageUrl || product.thumbnail} product={product} /> )}
            </div>
            <Link onClick={toggleWishListPopup} to={"/wishlist"} className='menu-item cart-menu-item button outline'>
                Go to wishlist
            </Link>

        </div>
    )
}
export default WishlistPopup