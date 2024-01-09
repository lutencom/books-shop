import {createSelector} from "reselect";

const selectCategoriesReducer = (state) => {
    return state.categories;
}
export const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesSlice) => {
        return categoriesSlice.booksCategories
    }
)

export const bookCategories = createSelector(
    [selectCategories], (booksCategories) => {
        return booksCategories.reduce((acc, item) => {
            const {title, items} = item;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
)