import {WISHLIST_ACTION_TYPES} from "./wishlist.types"

export const wishListInitialData = {
    wishListItems: [],
    isWishListPopupOpen: false,
    addToWishList: true
}
export const wishlistReducerMethod = (state = wishListInitialData, action = {}) => {
    const {type, payload} = action;
    switch (type) {
        case WISHLIST_ACTION_TYPES.WISHLIST_ITEMS:
            return {...state, wishListItems:payload}
        case WISHLIST_ACTION_TYPES.IS_WISHLIST_OPEN:
            return {...state, isWishListPopupOpen: payload}
        case WISHLIST_ACTION_TYPES.TOGGLE_ADD_OR_REMOVE:
            return {...state, addToWishList: payload}
        default: {
            return state
        }
    }
}
