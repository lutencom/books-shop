import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-duotone.svg";
import React, {useContext} from "react";
import {WishlistContext} from "../contexts/wishlist.context";
import {useSelector} from "react-redux";
import {wishListCountSelector} from "../store/wishlist/wishlist.selector";

const Wishlist = () => {
// const {wishlistCount} = useContext(WishlistContext)
const {wishlistCount} = useSelector(wishListCountSelector)
    return (
        <div className='menu-item cart-menu-item'>
            <div className="cart-icon-container icon">
                <AddToWishList className="cart-icon"/>
                <span className="counter">
                    {wishlistCount}
                </span>
            </div>
        </div>
    )
}
export default Wishlist