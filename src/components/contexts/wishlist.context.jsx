import {createContext, useReducer} from 'react';

const checkItemForWishlist = (wishlistItems, productToWish) => {
    const isPresentInWishList = wishlistItems.find((prod) => prod.id === productToWish.id);
    if (!isPresentInWishList) {
        return [...wishlistItems, productToWish]
    }
}
const checkItemsToRemove = (wishListItems, prodToRemove) => {
    return wishListItems.filter(item => item.id !== prodToRemove.id);
}
export const WishlistContext = createContext({
    wishlistItems: [],
    wishlistCount: 0,
    isWishListPopupOpen: false,
    openWishListPopup: () => {
    },
    addItemsToWishList: () => {
    },
    removeProductfromWishlist: () => {
    }
})
const wishListInitialData = {
    wishlistItems: [],
    isWishListPopupOpen: false,
    wishlistCount: 0
}
const reducerMethod = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'wishlistItems':
            return {...state, ...payload}
        case 'isWishListPopupOpen':
            return {...state, isWishListPopupOpen: payload}
        default: {

        }
    }
}
export const WishListProvider = ({children}) => {
    const [{
        wishlistItems,
        isWishListPopupOpen,
        wishlistCount
    }, dispatch] = useReducer(reducerMethod, wishListInitialData);
    const updateWishListProductsHandler = (addedToWishListProducts) => { //handler function which adds to the state
        const count = addedToWishListProducts.length;
        dispatch({
            type: "wishlistItems",
            payload: {
                wishlistItems: addedToWishListProducts,
                wishlistCount: count
            }
        })
    }
    const addItemsToWishList = (productToWish) => {
        const addedToWishListProducts = checkItemForWishlist(wishlistItems, productToWish)
        updateWishListProductsHandler(addedToWishListProducts)
    }
    const removeProductfromWishlist = (prodToRemove) => {
        const addedToWishListProducts = checkItemsToRemove(wishlistItems, prodToRemove)
        updateWishListProductsHandler(addedToWishListProducts)
    }
    const openWishListPopup = () => {
        dispatch({
            type: 'isWishListPopupOpen',
            payload: !isWishListPopupOpen
        })
    }

    const value = {
        wishlistItems,
        wishlistCount,
        isWishListPopupOpen,
        openWishListPopup,
        addItemsToWishList,
        removeProductfromWishlist
    }
    return <WishlistContext.Provider value={value}> {children} </WishlistContext.Provider>
}