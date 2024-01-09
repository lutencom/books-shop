import {createContext, useEffect, useState} from 'react';

export const WishlistContext = createContext({
    wishlistItems: [],
    wishlistCount: 0,
    isWishListPopupOpen:false,
    openWishListPopup:()=>{},
    addItemToWishlist: () => {
    },
    removeProductfromWishlist:()=>{}
})
export const WishListProvider = ({children}) => {
    const [wishlistItems, addToWishList] = useState([])
    const [wishlistCount, countWishList] = useState(0)
    const [isWishListOpen, openPopUp] = useState(false)

    const addItemToWishlist = (productToWish) => {
        const isPresentInWishList = wishlistItems.find((prod) => prod.id === productToWish.id);
        if (!isPresentInWishList) {
            addToWishList([...wishlistItems, productToWish])
        }
    }
    useEffect(()=>{
        countWishList(wishlistItems.length);
    },[wishlistItems])

    const openWishListPopup = () => {
        openPopUp(!isWishListOpen);
    }
    const removeProductfromWishlist = (prodToRemove) => {
        addToWishList(wishlistItems.filter(item=>item.id !== prodToRemove.id))
    }
    const value = {
        wishlistItems,
        wishlistCount,
        isWishListOpen,
        openWishListPopup,
        addItemToWishlist,
        removeProductfromWishlist
    }
    return <WishlistContext.Provider value={value}> {children} </WishlistContext.Provider>
}