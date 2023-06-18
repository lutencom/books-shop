import React, {useContext} from "react";
import {CartPopup} from "../../contexts/cart-dropdown.context";
import "./cart-totals.style.scss";

const CartTotal = () => {
    const {cartFinalTotals} = useContext(CartPopup);
    return (
        <div className='cart-total-block-inner'>
            <h3>Cart totals</h3>
            <p>Total price: <strong> {cartFinalTotals} $ </strong></p>
        </div>
    )
}
export default CartTotal;