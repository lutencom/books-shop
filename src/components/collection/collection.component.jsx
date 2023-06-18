import React, {useContext, useEffect, useState} from "react";

import Masonry from 'react-masonry-css'
import Product from "../product/product.component";
import { useParams } from 'react-router-dom';
import {BooksContext} from "../contexts/products.context";
import './collection.styles.scss';

const CollectionBooks = () => {
    const { catUrl } = useParams();
    const {booksCategories} = useContext(BooksContext);
    const [books, setBooks] = useState(booksCategories[catUrl]);
    useEffect(()=>{
        setBooks(booksCategories[catUrl]);
    }, [catUrl, booksCategories])
    // const books  = booksCategories[catUrl];
    // console.log( books );
    return (
        <div className="container">
        <div className='collection-preview'>
            <h1>{catUrl.toUpperCase()}</h1>
            <Masonry
                breakpointCols={5}
                className="masonry-grid products"
                columnClassName="masonry-grid_column">

                {books && books.map((item) => (
                    <Product key={item.id} product={item} name={item.name} imgURL = {item.imageUrl}/>
                    )
                )}
            </Masonry>
        </div>
        </div>
    )
}
export default CollectionBooks;

