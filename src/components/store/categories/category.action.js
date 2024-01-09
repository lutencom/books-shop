import {CATEGORIES_ACTION_TYPES} from "./category.types"

import {createAction} from "../../utils/reducer.utils";

export const setCategories = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_BOOKS_CATEGORIES, categoriesMap)