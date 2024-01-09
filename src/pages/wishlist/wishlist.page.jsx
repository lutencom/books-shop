import React, {useContext} from 'react';
import './wishlist.page.scss';
import CartProduct from "../../components/cart/cart-product/cart-product.component";
import {CartPopups} from "../../components/contexts/cart-dropdown-reducer.context";
import CartProducts from "../../components/cart/mini-cart-product/mini-cart-product.component";
import {WishlistContext} from "../../components/contexts/wishlist.context";
import CartList from "../../components/cart-list/cart-list";
import CartTotal from "../../components/cart/cart-totals/cart-totals.component";

const WishlistPage = () => {
    const {wishlistItems} = useContext(WishlistContext);
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Wish list</h1>
                </div>
                <div className="col-1">
                    <div className="cart-products table">
                        {wishlistItems.length ? (
                            <div className='cart-item description row'>
                                <div className="column">Thumbnail</div>
                                <div className="column">Name</div>
                                <div className="column">Price</div>
                                <div className="column">Add to cart</div>
                                <div className="column">Remove</div>
                            </div>) : <h3>No books here in wishlist ... </h3>}{
                        wishlistItems.map((product) => {
                            return <CartProduct type='wishlistProduct' key={product.id}
                                                name={product.name || product.title}
                                                imgURL={product.imageUrl || product.thumbnail} product={product}/>
                        })
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WishlistPage;