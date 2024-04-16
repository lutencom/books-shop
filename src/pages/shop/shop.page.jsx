import React, {useEffect} from "react";
import ShopProducts from "./shop.component";
import CollectionBooks from "../../components/collection/collection.component";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {
    getCategoriesAndDocuments,
} from "../../components/firebase/firebase.utils";
import {setCategories} from "../../components/store/categories/category.action";
import SingleProductPage from "../../components/product/product-single-page";
import SingleProduct from "../../components/product/product-single-page";

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
            <Route path=':productUrl' element={<SingleProduct />}/>
            <Route path=':catUrl/:productUrl' element={<SingleProduct />}/>
        </Routes>

    )
}
export default ShopPage;