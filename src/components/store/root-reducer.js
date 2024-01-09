import {combineReducers} from "redux";
import {userReducerMethod} from './user/user.reducer'
import {cartReducerMethod} from "./cart/cart.reducer";
import {categoriesReducerMethod} from "./categories/category.reducer";

export const rootReducer = combineReducers({
    user: userReducerMethod,
    categories:categoriesReducerMethod,
    cart:cartReducerMethod
})