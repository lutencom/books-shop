import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import TopBar from "./components/header-top-bar/top-bar.component";
import AccountPage from "./pages/account/account.component";
import CartPage from "./pages/cart/cart.page";
import ProductsPage from "./pages/products/products.page";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedCustom
} from "./components/firebase/firebase.utils";
import ReviewsPage from "./pages/reviews/reviews.page";
import ContactPage from "./pages/contact/contact-page";
import ComponentsPage from "./pages/components/components";
import WishlistPage from "./pages/wishlist/wishlist.page";
import {setCurrentUser} from "./components/store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedCustom((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, [])
    return (
        <div className="App">
            <TopBar/>
            <Header/>
            <Routes>
                <Route index path='/' element={<HomePage/>}/>
                <Route path='shop/*' element={<ShopPage/>}/>
                <Route path='products' element={<ProductsPage/>}/>
                <Route path='account' element={<AccountPage/>}/>
                <Route path='cart' element={<CartPage/>}/>
                <Route path='reviews' element={<ReviewsPage/>}/>
                <Route path='components' element={<ComponentsPage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='wishlist' element={<WishlistPage/>}/>
            </Routes>
        </div>
    );
}
export default App;
