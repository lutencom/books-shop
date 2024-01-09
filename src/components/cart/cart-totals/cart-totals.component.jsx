import React, {useContext} from "react";
import {CartPopups} from "../../contexts/cart-dropdown-reducer.context";
import "./cart-totals.style.scss";

const CartTotal = () => {
    const {cartFinalTotals} = useContext(CartPopups);
    return (
        <div className='cart-total-block-inner'>
            <h3>Cart totals</h3>
            <p>Total price: <strong> {cartFinalTotals} $ </strong></p>
        </div>
    )
}
export default CartTotal;