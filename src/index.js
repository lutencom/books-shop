import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './components/contexts/user.context';
import {BooksProvider} from './components/contexts/products.context';
import {ReviewsProvider} from "./components/contexts/reviews.context";
import {CartPopupProvider} from './components/contexts/cart-dropdown.context';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <BooksProvider>
                    <CartPopupProvider>
                        <ReviewsProvider>
                            <App/>
                        </ReviewsProvider>
                    </CartPopupProvider>
                </BooksProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);

