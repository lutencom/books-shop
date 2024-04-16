import React, {useReducer, createContext} from "react";

const checkProductsToAdd = (cartProducts, productToAdd) => {

    const existingCartProduct = cartProducts.find(
        (product) => product.id === productToAdd.id
    );
    if (existingCartProduct) {

        return (cartProducts.map(product =>
            product.id === productToAdd.id ? {...product, quantity: product.quantity + 1} : product
        ))
    }
    return [...cartProducts, {...productToAdd, quantity: 1}];// besides existing CartProducts, add the newly added "ProductToAdd, with quantity of 1"
}
const checkProductsToDecrement = (cartProducts, cartItemToRemove) => {

    return (cartProducts.map(product =>

        product.id === cartItemToRemove.id && product.quantity > 1 ? {
            ...product,
            quantity: product.quantity - 1
        } : product
    ))
}
const checkProductsToRemove = (cartProducts, cartItemToRemove) => {

    return (cartProducts.filter(product =>

        product.id !== cartItemToRemove.id
    ))
}

export const CartPopups = createContext({
    isOpen: false,
    toggleClick: () => {
    },
    cartProducts: [],
    addProductToCart: () => {
    },
    cartTotal: 0,
    decrementProductFromCart: () => {
    },
    removeProductFromCart: () => {
    },
    cartFinalTotals: 0
});
const initialData = {
    isOpen: false,
    cartProducts: [],
    cartTotal: 0,
    cartFinalTotals: 0
}
const reducerMethod = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'setCartProducts':
            return {...state, ...payload}
        case 'togglePopup':
            return {...state, isOpen: payload}
        default:
            throw new Error()
    }
}
export const CartPopupProviderReducer = ({children}) => {

    const [{ isOpen, cartProducts, cartTotal, cartFinalTotals}, dispatch] = useReducer(reducerMethod, initialData);

    const updateCartItemsHandler = (updatedProds) => {  //handler functions which updates the state
        const newCartTotal = updatedProds.reduce((prevTotalQuantity, updatedTotalQuantity) =>
            prevTotalQuantity + updatedTotalQuantity.quantity, 0
        );

        const newCartFinalTotal = updatedProds.reduce((initialValue, itemPrice) =>
            initialValue + (itemPrice.quantity * itemPrice.price), 0
        );
        dispatch({
            type: 'setCartProducts',
            payload: {
                cartProducts: updatedProds,
                cartTotal: newCartTotal,
                cartFinalTotals: newCartFinalTotal,
            }
        })
    }
    const toggleClick = () => {
        dispatch({
            type: 'togglePopup',
            payload: !isOpen
        })
    }

    const addProductToCart = (productToAdd) => {
        const updatedProds = checkProductsToAdd(cartProducts, productToAdd)
        updateCartItemsHandler(updatedProds)
    }

    const decrementProductFromCart = (cartItemToRemove) => {
        const updatedProds = checkProductsToDecrement(cartProducts, cartItemToRemove)
        updateCartItemsHandler(updatedProds)
    }
    const removeProductFromCart = (cartItemToRemove) => {
        const updatedProds = checkProductsToRemove(cartProducts, cartItemToRemove)
        updateCartItemsHandler(updatedProds)
    }

    const value = {
        isOpen,
        toggleClick,
        cartProducts,
        addProductToCart,
        cartTotal,
        removeProductFromCart,
        decrementProductFromCart,
        cartFinalTotals
    };
    return (
        <CartPopups.Provider value={value}> {children} </CartPopups.Provider>
    );
};