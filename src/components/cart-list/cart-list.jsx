import CartProduct from "../cart/cart-product/cart-product.component";
import CartTotal from "../cart/cart-totals/cart-totals.component";
import React from "react";

const CartList = ({cartProducts, type}) => {
    return (
        <>
            <div className="col-1">
                <div className="cart-products table">
                    {cartProducts.length && type === 'cartPage' ? (
                        <div className='cart-item description row'>
                            <div className="column">Thumbnail</div>
                            <div className="column">Name</div>
                            <div className="column">Price</div>
                            <div className="column">Quantity</div>
                            <div className="column">Remove</div>
                        </div>) : <h3>No books here in cart... </h3> || (cartProducts.length && type === 'wishlistPage') ? (
                        <div className='cart-item description row'>
                            <div className="column">Thumbnail</div>
                            <div className="column">Name</div>
                            <div className="column">Price</div>
                            <div className="column">Remove</div>
                        </div>) : <h3>No books here in wishlist ... </h3>}{
                        cartProducts.map((product) => {
                        return <CartProduct key={product.id} name={product.name || product.title}
                        imgURL={product.imageUrl || product.thumbnail} product={product}/>
                    })
                    }
                </div>
            </div>
            <div className="col-1-3">
                <CartTotal/>
            </div>
        </>
    )
}
export default CartList;