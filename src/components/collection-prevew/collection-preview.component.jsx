import React from "react";
import './collection-preview.styles.scss';
import Masonry from 'react-masonry-css'
import Product from "../product/product.component";
import {Link} from "react-router-dom";

const CollectionPreview = ({title, products}) => {
    return (
        <div className='collection-preview'>
            <Link to={title}><h2>{title.toUpperCase()}</h2></Link>
            <Masonry
                breakpointCols={5}
                className="masonry-grid products"
                columnClassName="masonry-grid_column">

                {products.filter((items, index) => index < 5).map((item) => (
                        <Product key={item.id} product={item} name={item.name} imgURL = {item.imageUrl}/>
                    )
                )}
            </Masonry>
        </div>
    )
}
export default CollectionPreview;

