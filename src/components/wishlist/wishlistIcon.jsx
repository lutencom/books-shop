import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-duotone.svg";
import React from "react";
import {WishlistContext} from "../contexts/wishlist.context";
import {useDispatch, useSelector} from "react-redux";
import {wishListPopup, wishListCountSelector, wishListItemsSelector} from "../store/wishlist/wishlist.selector";
import {openWishListPopup} from "../store/wishlist/wishlist.action";

const WishlistIcon = () => {
    const dispatch = useDispatch();
    const isWishListPopupOpen = useSelector(wishListPopup);
    const toggleWishListPopup = () => {
        dispatch(openWishListPopup(!isWishListPopupOpen));
    }
    const countItems = useSelector(wishListItemsSelector);
    const length = countItems.length
    return (
        <div className='menu-item cart-menu-item'>
            <div onClick={toggleWishListPopup} className="cart-icon-container icon">
                <AddToWishList className="cart-icon"/>
                <span className="counter">
                    {length}
                </span>
            </div>
        </div>
    )
}
export default WishlistIcon