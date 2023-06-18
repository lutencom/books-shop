import React, {useState, createContext, useEffect} from "react";

const checkProductsToAdd = (cartProducts, productToAdd) => {

    const existingCartProduct = cartProducts.find(
        (product) => product.id === productToAdd.id
    );
    if (existingCartProduct) {
        return (cartProducts.map(product =>
            product.id === productToAdd.id ? {...product, quantity: product.quantity + 1 } : product
        ))
    }
    return [...cartProducts, {...productToAdd, quantity: 1, isAlreadyAdded:true}];// besides existing CartProducts, add the newly added "ProductToAdd, with quantity of 1"
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

export const CartPopup = createContext({
    isOpen: false,

    isProductAdded: false,
    checkIsAdded: ()=> {},
    togglePopup: () => {
    },
    cartProducts: [], // products from cart
    addProductToCart: () => {
    }, // function that adds products to cart
    cartTotal: 0,
    decrementProductFromCart: () => {
    },
    removeProductFromCart: () => {
    },
    cartFinalTotals: 0
});

export const CartPopupProvider = ({children}) => {

    const [isOpen, togglePopup] = useState(false);

    const [isAdded, checkIsAdded] = useState(false);

    const [cartProducts, setCartProducts] = useState([]);

    const [cartTotal, setCartTotal] = useState(0);

    const [cartFinalTotals, setCartFinalTotals] = useState(0);

    useEffect(() => {
        const updatedCartTotal = cartProducts.reduce((prevTotalQuantity, updatedTotalQuantity) =>
            prevTotalQuantity + updatedTotalQuantity.quantity, 0
        );
        setCartTotal(updatedCartTotal);

        const cartFinalTotal = cartProducts.reduce((initialValue, itemPrice) =>
            initialValue + (itemPrice.quantity * itemPrice.price), 0
        );
        setCartFinalTotals(cartFinalTotal);
    }, [cartProducts]);

    const addProductToCart = (productToAdd) => {
        setCartProducts(checkProductsToAdd(cartProducts, productToAdd))
    }

    const decrementProductFromCart = (cartItemToRemove) => {
        setCartProducts(checkProductsToDecrement(cartProducts, cartItemToRemove))
    }
    const removeProductFromCart = (cartItemToRemove) => {
        setCartProducts(checkProductsToRemove(cartProducts, cartItemToRemove))
    }

    const value = {
        isOpen,
        isAdded,
        togglePopup,
        checkIsAdded,
        cartProducts,
        addProductToCart,
        cartTotal,
        removeProductFromCart,
        decrementProductFromCart,
        cartFinalTotals
    };
    return (
        <CartPopup.Provider value={value}> {children} </CartPopup.Provider>
    );
};
