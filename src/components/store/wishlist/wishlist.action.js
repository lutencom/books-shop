import {createAction} from "../../utils/reducer.utils";
import {WISHLIST_ACTION_TYPES} from "./wishlist.types";

export const openWishListPopup = (boolean) => createAction(WISHLIST_ACTION_TYPES.IS_WISHLIST_OPEN, boolean)
export const toggleAddOrRemove = (boolean) => createAction(WISHLIST_ACTION_TYPES.TOGGLE_ADD_OR_REMOVE, boolean)

const checkItemForWishlist = (wishListItems, productToWish) => {
    const isPresentInWishList = wishListItems.find((prod) => prod.id === productToWish.id);
    if (!isPresentInWishList) {
        return [...wishListItems, productToWish]
    }
    return wishListItems
}
const checkItemsToRemove = (wishListItems, prodToRemove) => {
    return wishListItems.filter(item => item.id !== prodToRemove.id);
}

export const addItemsToWishList = (wishListItems, productToWish) => {
    const addedToWishListProducts = checkItemForWishlist(wishListItems, productToWish)
    return createAction(WISHLIST_ACTION_TYPES.WISHLIST_ITEMS, addedToWishListProducts)

}
export const removeProductfromWishlist = (wishListItems, prodToRemove) => {
    const addedToWishListProducts = checkItemsToRemove(wishListItems, prodToRemove)
    return createAction(WISHLIST_ACTION_TYPES.WISHLIST_ITEMS, addedToWishListProducts)
}