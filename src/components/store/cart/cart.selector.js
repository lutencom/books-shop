import {createSelector} from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartProducts = createSelector([selectCartReducer], (cart) => cart.cartProducts);
export const selectTogglePopup = createSelector([selectCartReducer], (cart) => cart.isOpen);
export const selectCartTotal = createSelector([selectCartProducts], (cartProducts) =>
    cartProducts.reduce((prevTotalQuantity, updatedTotalQuantity) =>
        prevTotalQuantity + updatedTotalQuantity.quantity, 0
    ));

export const selectCartFinalTotal = createSelector([selectCartProducts], (cartProducts) =>
    cartProducts.reduce((initialValue, itemPrice) =>
        initialValue + (itemPrice.quantity * itemPrice.price), 0
    ));