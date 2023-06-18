import React, {useEffect, useState} from "react";
import Product from "../../components/product/product.component";
import Masonry from "react-masonry-css";

const ProductsPage = () => {
    const [elements, getElements] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(x => x.json()).then(items => getElements(items.products))
    }, []);

    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Other products page</h1>
                    <Masonry
                        breakpointCols={5}
                        className="masonry-grid products"
                        columnClassName="masonry-grid_column">

                        {elements.map((item) => (
                            // console.log(item)
                                <Product key={item.id} product={item} name = {item.title} description={item.description} imgURL={item.thumbnail}/>
                                )
                            )
                        }
                    </Masonry>
                </div>

            </div>
        </div>
    )
}
export default ProductsPage;