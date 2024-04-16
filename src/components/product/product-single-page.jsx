import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import './product.component.scss';
import {addProductToCartWithQuantity} from "../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartProducts} from "../store/cart/cart.selector";
import {ReactComponent as Right} from "../../Assets/shop-logos/chevron-right-duotone.svg";
import {ReactComponent as Bell} from "../../Assets/shop-logos/bell.svg";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/xmark-solid.svg";
import {addItemsToWishList, removeProductfromWishlist} from "../store/wishlist/wishlist.action";
import {wishListItemsSelector} from "../store/wishlist/wishlist.selector";
import {ReactComponent as AddedToWishList} from "../../Assets/shop-logos/heart-solid.svg";
import {ReactComponent as AddToWishList} from "../../Assets/shop-logos/heart-sharp-regular.svg";

const SingleProduct = () => {
    const location = useLocation()
    const {item} = location.state;
    const home = window.origin;
    const {price, name, imageUrl, category_slug, category} = item;
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts);
    const [isOpen, openPopup] = useState(false);
    const wishListItems = useSelector(wishListItemsSelector)
    const addToWishLists = () => {
        dispatch(addItemsToWishList(wishListItems, item))
    }
    const removeFromWishlist = () => {
        dispatch(removeProductfromWishlist(wishListItems, item))
    }
    const isAlreadyInWishlist = wishListItems.find((prod) => prod.id === item.id);

    const cartClick = (e) => {
        e.preventDefault();
        const quantityInput = document.getElementById('addToCart');
        const itemsNumber = Number(quantityInput.value);
        dispatch(addProductToCartWithQuantity(cartProducts, item, itemsNumber));
        quantityInput.value = 1;
        openPopup(true);
    }
    const closePopup = () => {
        openPopup(false);
    }
    return (
        <div className="container single-product-page">
            <div className="inner-container grid">

                {isOpen && <div className="col-1 relative no-margin">
                    <div className="col-1-4 card added-to-cart notification slide-bottom no-margin">
                        <div className="closeIcon"><CloseIcon onClick={closePopup}/></div>
                        <span className='icon bell'><Bell className='wobble-hor-top'/></span>
                        <p> You have added to cart this book: <strong>{name}.</strong></p>
                        <p> Do you want to go to cart page?</p>

                        <Link to={'/cart/'}>
                            <a className="button outline">Go to cart page</a>
                        </Link>
                    </div>
                </div>}

                <div className="col-1">
                    <div className="breadcrumps">
                        <Link to={home}>
                            Home
                        </Link>
                        <span className='separator'><Right/></span>
                        <Link to={home + '/shop'}>
                            Shop
                        </Link>
                        <span className='separator'><Right/></span>
                        <Link to={home + '/shop/' + category_slug}>
                            {category}
                        </Link>
                        <span className='separator'><Right/></span>
                        <span>{name}</span>
                    </div>
                </div>
                {/*<div className="col-1-2 product-image">*/}
                {/*    <img src={imageUrl} alt=""/>*/}
                {/*</div>*/}
                <div className="col-1-2">
                    <div
                        className={isAlreadyInWishlist ? "img-product product-added-in-wishlist" : "img-product"}>
                        <img src={imageUrl} alt="" className="product-thumbnail"/>
                        <a onClick={isAlreadyInWishlist ? removeFromWishlist : addToWishLists}
                           className='icon icon-button wish-icon'>
                            {isAlreadyInWishlist ? <AddedToWishList/> : <AddToWishList/>}
                        </a>
                    </div>
                </div>
                <div className="col-1-2">
                    <h1>{name} </h1>
                    <p className="product-meta">
                        <Link to={'/shop/' + category_slug}>
                            Category: {category}
                        </Link>
                    </p>
                    <p className="price">
                        {price} $
                    </p>
                    <div className="add-to-cart">
                        <div className="quantity-block">
                            <form onSubmit={cartClick}>
                                <input id='addToCart' type="number" className='itemsNumber' defaultValue='1' min='1'/>
                                <input type='submit' className='button full' value='Add to cart'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProduct;