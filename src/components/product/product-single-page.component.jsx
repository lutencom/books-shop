import {Route, Routes, useParams} from "react-router-dom";
import Product from "../product/product.component";
import ShopProducts from "../../pages/shop/shop.component";
import CollectionBooks from "../collection/collection.component";
import React from "react";
import SingleProduct from "./product-single-page";


const SingleProductPage = () => {
    const { productUrl } = useParams();
    return(
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Wish list</h1>
                </div>
            </div>
        </div>
    )
}
export default SingleProductPage;