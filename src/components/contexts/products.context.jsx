import React, {useState, createContext, useEffect} from "react";
import Data_books from "../../pages/shop/shop-data.js";
import {addCollectionAndDocument, getCategoriesAndDocuments} from "../firebase/firebase.utils";

export const BooksContext = createContext({
    booksCategories:{}
});
export const BooksProvider = ({children}) => {

    const [booksCategories, getBooksCategories] = useState({});

    //This should run only once.If running multiple times, it will set new values in db
    // useEffect(() => {
    //     addCollectionAndDocument('categories', Data_books)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            getBooksCategories(categoriesMap);

        }
        getCategoriesMap();
    }, [])
    const value = {booksCategories};
    return (
        <BooksContext.Provider value={value}> {children} </BooksContext.Provider>
    );
};
