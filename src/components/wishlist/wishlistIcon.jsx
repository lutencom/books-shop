import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-duotone.svg";
import React, {useContext} from "react";
import {WishlistContext} from "../contexts/wishlist.context";

const WishlistIcon = () => {
const {wishlistCount, openWishListPopup} = useContext(WishlistContext)
    return (
        <div className='menu-item cart-menu-item'>
            <div onClick={openWishListPopup} className="cart-icon-container icon">
                <AddToWishList className="cart-icon"/>
                <span className="counter">
                    {wishlistCount}
                </span>
            </div>
        </div>
    )
}
export default WishlistIcon