import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {ReviewsProvider} from "./components/contexts/reviews.context";
import {CartPopupProviderReducer} from './components/contexts/cart-dropdown-reducer.context';
import {store} from "./components/store/store";
import './index.css';
import App from './App';
import {WishListProvider} from "./components/contexts/wishlist.context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/*<CartPopupProviderReducer>*/}
                    <WishListProvider>
                        <ReviewsProvider>
                            <App/>
                        </ReviewsProvider>
                    </WishListProvider>
                {/*</CartPopupProviderReducer>*/}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

