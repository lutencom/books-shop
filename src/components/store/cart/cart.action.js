import {CART_ACTION_TYPES} from "./cart.types"
import {createAction} from "../../utils/reducer.utils";
export const togglePopupAction = (isOpen) => createAction(CART_ACTION_TYPES.TOGGLE_POPUP, !isOpen)

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