import React from "react";
import ShopProducts from "./shop.component";
import CollectionBooks from "../../components/collection/collection.component";
import {Routes, Route} from 'react-router-dom';

const ShopPage = () => {
    return (
        <Routes>
            <Route index element={<ShopProducts/>} />
            <Route path=':catUrl' element={<CollectionBooks />}/>
        </Routes>

    )
}
export default ShopPage;