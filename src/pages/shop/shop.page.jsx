import React, {useEffect} from "react";
import ShopProducts from "./shop.component";
import CollectionBooks from "../../components/collection/collection.component";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {
    getCategoriesAndDocuments,
} from "../../components/firebase/firebase.utils";
import {setCategories} from "../../components/store/categories/category.action";

const ShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesMap));
        }
        getCategoriesMap()
    }, [])
    return (
        <Routes>
            <Route index element={<ShopProducts/>} />
            <Route path=':catUrl' element={<CollectionBooks />}/>
        </Routes>

    )
}
export default ShopPage;