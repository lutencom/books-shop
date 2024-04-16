import {CART_ACTION_TYPES} from "./cart.types"
import {createAction} from "../../utils/reducer.utils";

export const togglePopupAction = (boolean) => createAction(CART_ACTION_TYPES.TOGGLE_POPUP, boolean)

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
const checkProductsToAddWithQuantity = (cartProducts, productToAdd, itemsNumber) => {

    const existingCartProduct = cartProducts.find(
        (product) => product.id === productToAdd.id
    );
    if (existingCartProduct) {
        return (cartProducts.map(product =>
            product.id === productToAdd.id ? {...product, quantity: product.quantity + itemsNumber} : product
        ))
    }
    return [...cartProducts, {...productToAdd, quantity: itemsNumber}];// besides existing CartProducts, add the newly added "ProductToAdd, with quantity of 1"
}
const checkProductsToDecrement = (cartProducts, cartItemToDecrement) => {

    return (cartProducts.map(product =>

        product.id === cartItemToDecrement.id && product.quantity > 1 ? {
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
export const addProductToCart = (cartProducts, productToAdd) => {
    const updatedProds = checkProductsToAdd(cartProducts, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_PRODUCTS, updatedProds);
}
export const addProductToCartWithQuantity = (cartProducts, productToAdd, itemsNumber) => {
    const updatedProds = checkProductsToAddWithQuantity(cartProducts, productToAdd, itemsNumber)
    return createAction(CART_ACTION_TYPES.SET_CART_PRODUCTS, updatedProds);
}
export const decrementProductFromCart = (cartProducts, cartItemToDecrement) => {
    const updatedProds = checkProductsToDecrement(cartProducts, cartItemToDecrement)
    return createAction(CART_ACTION_TYPES.SET_CART_PRODUCTS, updatedProds);
}
export const removeProductFromCart = (cartProducts, cartItemToRemove) => {
    const updatedProds = checkProductsToRemove(cartProducts, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_PRODUCTS, updatedProds);
}