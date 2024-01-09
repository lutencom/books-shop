import {USER_ACTION_TYPES} from "./user.types"
const initialData = {
    currentUser: null,
}
export const userReducerMethod = (state = initialData, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state
    }
}
