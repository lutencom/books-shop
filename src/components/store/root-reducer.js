import {combineReducers} from "redux";
import {userReducerMethod} from './user/user.reducer'
import {cartReducerMethod} from "./cart/cart.reducer";
import {categoriesReducerMethod} from "./categories/category.reducer";
import {wishlistReducerMethod} from "./wishlist/wishlist.reducer"

export const rootReducer = combineReducers({
    user: userReducerMethod,
    categories:categoriesReducerMethod,
    cart:cartReducerMethod,
    wishList:wishlistReducerMethod
})