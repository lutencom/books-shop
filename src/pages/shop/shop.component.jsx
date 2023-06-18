import React, {useContext, Fragment} from "react";
import './shop.component.scss';
import {BooksContext} from "../../components/contexts/products.context";
import CollectionPreview from '../../components/collection-prevew/collection-preview.component';

const ShopProducts = () => {
    const {booksCategories} = useContext(BooksContext);
    return (

        <div className="container">
            {Object.keys(booksCategories).map((title) =>
                (<Fragment key={title}>
                        <div className='collection-preview'>
                            <CollectionPreview key={booksCategories[title].id} title={title}
                                               products={booksCategories[title]}/>
                        </div>
                    </Fragment>
                    )
                 )
            }
        </div>
    )
}
export default ShopProducts;
