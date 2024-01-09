import {CATEGORIES_ACTION_TYPES} from "./category.types"
const initialData = {
    booksCategories: [],
}
export const categoriesReducerMethod = (state = initialData, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_BOOKS_CATEGORIES:
            return {...state, booksCategories:payload}
        default:
            return state
    }
}
