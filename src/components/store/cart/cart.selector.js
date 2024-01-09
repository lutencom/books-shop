import {createSelector} from "reselect";

export const selectTogglePopup = (state) => state.cart.isOpen

const newCartTotal = updatedProds.reduce((prevTotalQuantity, updatedTotalQuantity) =>
    prevTotalQuantity + updatedTotalQuantity.quantity, 0
);

const newCartFinalTotal = updatedProds.reduce((initialValue, itemPrice) =>
    initialValue + (itemPrice.quantity * itemPrice.price), 0
);