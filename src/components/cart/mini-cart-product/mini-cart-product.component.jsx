import React from "react";
import "./mini-cart-product.style.scss"

const CartProducts = ({product, imgURL, name, type}) => {
    const {quantity, price} = product;
    return (
        <div className='cart-item card'>
            <div className="thumbnail">
                <img src={imgURL} alt="" className="product-thumbnail"/>
            </div>
            <div className="item-info">
                <h5>{name}</h5>{type = 'wishlistItem' ? <span className="price">{price}$ </span> :
                <span className="price">{price}$ x {quantity} </span>}
            </div>
        </div>

    )
}

export default CartProducts;