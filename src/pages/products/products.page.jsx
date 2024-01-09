import React, {useEffect, useState} from "react";
import Product from "../../components/product/product.component";
import Masonry from "react-masonry-css";

const ProductsPage = () => {
    const [elements, getElements] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(x => x.json()).then(items => getElements(items.products))
    }, []);
    const [searchedItems, getSearchedItems] = useState([]);
    const [activeOption, setActiveOption] = useState()
    const searchItems = (e) => {
        const value = e.target.value;
        const filteredItems = elements.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
        getSearchedItems(filteredItems);
    }
    const filterItems = (item) => {
        const filterItems = elements.filter(el => el.category.toLowerCase().includes(item.toLowerCase()));
        getSearchedItems(filterItems);
    }
    const uniqueCategories = [...new Set(elements.map((item) => (item.category)))]
    const showAllProducts = () => {
        getSearchedItems(elements);
    }

    const selectHandler = (e) => {
        setActiveOption(e.target.value);
        if (activeOption === 'alphabetically-asc') {
            getSearchedItems(elements.sort((a, b) => {
                    const nameA = a.title.toUpperCase();
                    const nameB = b.title.toUpperCase();
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                }
            ))
        } else if (activeOption === 'alphabetically-desc') {
            getSearchedItems(elements.sort((a, b) => {
                    const nameA = a.title.toUpperCase();
                    const nameB = b.title.toUpperCase();
                    if (nameA > nameB) {
                        return 1;
                    }
                    if (nameA < nameB) {
                        return -1;
                    }
                    return 0;
                }
            ))
        } else if (activeOption === 'price-asc') {
            getSearchedItems(elements.sort((a, b) => {
                    return a.price - b.price
                }
            ))
        } else if (activeOption === 'price-desc') {
            getSearchedItems(elements.sort((a, b) => {
                    return b.price - a.price
                }
            ))
        } else {
            console.log(`You did not choose any options.`);
        }

    }
    const allProducts = searchedItems.length > 0 ? searchedItems : elements;
    return (
        <div className="container">
            <div className="inner-container grid">
                <div className="col-1">
                    <h1>Other products page</h1>
                    <form>
                        <input onChange={searchItems} type="text" className="search"
                               placeholder='Search the products...'/>
                    </form>
                </div>
                <div className="col-1-5 filter">
                    {uniqueCategories.map((item, index) => {
                        return (
                            <div onClick={() => filterItems(item)} key={index}
                                 className="card margin-top-bottom">{item}</div>
                        )
                    })
                    }
                    <div onClick={showAllProducts} className="card margin-top-bottom">All items</div>
                </div>
                <div className="col-4-5">
                    <div className="col-1 content-right-aligned "><span>Sort by...</span>
                        <select className='card select' id="" onChange={selectHandler}>
                            <option value="default-sorting">Default sorting</option>
                            <option value="alphabetically-asc">Alphabetically, ascending</option>
                            <option value="alphabetically-desc">Alphabetically, descending</option>
                            <option value="price-asc">Price, ascending</option>
                            <option value="price-desc">Price, descending</option>
                        </select>
                    </div>
                    <div className="col-1">
                        <Masonry
                            breakpointCols={4}
                            className="masonry-grid products"
                            columnClassName="masonry-grid_column">

                            {allProducts.map((item) => (
                                    <Product key={item.id} product={item} name={item.title} description={item.description}
                                             imgURL={item.thumbnail}/>
                                )
                            )
                            }
                        </Masonry>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProductsPage;