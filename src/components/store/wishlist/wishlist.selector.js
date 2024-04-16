import {createSelector} from "reselect";

const wishListSelector = (state) => {
    return state.wishList;
}
export const wishListItemsSelector = createSelector([wishListSelector], (selectWishList) => selectWishList.wishListItems);

export const wishListPopup = createSelector(
    [wishListSelector], (selectWishList) => selectWishList.isWishListPopupOpen
)
export const toggleAddOrRemoveWishlist = createSelector(
    [wishListSelector], (selectWishList) => selectWishList.addToWishList
)
export const wishListCountSelector = createSelector([wishListItemsSelector], (wishListItemsSlicer) => wishListItemsSlicer.length)
