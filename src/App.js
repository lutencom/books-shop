import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import TopBar from "./components/header-top-bar/top-bar.component";
import AccountPage from "./pages/account/account.component";
import CartPage from "./pages/cart/cart.page";
import ProductsPage from "./pages/products/products.page";
import {auth} from "./components/firebase/firebase.utils";
import ReviewsPage from "./pages/reviews/reviews.page";
import ShopProducts from "./pages/shop/shop.component";
import Collection from "./components/collection/collection.component";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFRomAuth = null;

    componentDidMount() {
        this.unsubscribeFRomAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            })
        });
    }

    componentWillUnmount() {
        this.unsubscribeFRomAuth();
    }

    render() {
        return (
            <div className="App">
                <TopBar currentUser = {this.state.currentUser} />
                <Header />
                <Routes>
                    <Route index path='/' element={<HomePage/>}/>
                    <Route path='shop/*' element={<ShopPage/>} />
                    <Route path='products' element={<ProductsPage/>}/>
                    <Route path='account' element={<AccountPage/>}/>
                    <Route path='cart' element={<CartPage/>}/>
                    <Route path='reviews' element={<ReviewsPage/>}/>

                    {/*<Route path='/reviews' element={<ReviewsPage/>}/>*/}
                </Routes>
            </div>
        );
    }
}

export default App;
