import React, {useContext} from 'react';
import './cart.page.scss';
import CartProduct from "../../components/cart/cart-product/cart-product.component";
import CartTotal from "../../components/cart/cart-totals/cart-totals.component";
import {CartPopup} from "../../components/contexts/cart-dropdown.context";
import CartProducts from "../../components/cart/mini-cart-product/mini-cart-product.component";

const CartPage = () => {
    const {cartProducts} = useContext(CartPopup);
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Cart page</h1>
                </div>
                <div className="col-1">
                    <div className="cart-products table">
                        {cartProducts.length ? (
                            <div className='cart-item description row'>
                                <div className="column">Thumbnail</div>
                                <div className="column">Name</div>
                                <div className="column">Price</div>
                                <div className="column">Quantity</div>
                                <div className="column">Remove</div>
                            </div>) : (<h3>No products in cart</h3>)}
                        {cartProducts.map((product) => {
                            return (
                                <CartProduct key={product.id} name={product.name || product.title} imgURL = {product.imageUrl || product.thumbnail} product={product}/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-1-3">
                    <CartTotal />
                </div>
            </div>
        </div>
    )
}
export default CartPage;