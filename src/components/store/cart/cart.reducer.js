import {CART_ACTION_TYPES} from "./cart.types"
const initialData = {
    isOpen: false,
    cartProducts: [],
}
export const cartReducerMethod = (state = initialData, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_PRODUCTS:
            return {...state, cartProducts:payload}
        case CART_ACTION_TYPES.TOGGLE_POPUP:
            return {...state, isOpen: payload}
        default:
            return state
    }
}
