import {createContext, useEffect, useReducer} from "react";
import {onAuthStateChangedCustom, signOutCustom, createUserDocumentFromAuth} from "../firebase/firebase.utils";
import {createAction} from "../utils/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});
const initialData = {
    currentUser: null,
}
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};
const userReducerMethod  = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            throw new Error();
    }
}

export const UserProvider = ({children}) => {

    // const [currentUser, setCurrentUser] = useState(null); useState way

    const [{currentUser}, dispatch] = useReducer(userReducerMethod, initialData)
    const setCurrentUser = (user) =>
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    useEffect(() => {
        const unsubscribe = onAuthStateChangedCustom((user) => {
            if (user) {
                signOutCustom(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {currentUser};
    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
