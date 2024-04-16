import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {ReviewsProvider} from "./components/contexts/reviews.context";
import {store, persistor} from "./components/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import {WishListProvider} from "./components/contexts/wishlist.context";
import {BooksProvider} from "./components/contexts/products.context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    {/*<WishListProvider>*/}
                    <BooksProvider >
                    <ReviewsProvider>
                        <App/>
                    </ReviewsProvider>
                    </ BooksProvider>
                    {/*</WishListProvider>*/}
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

