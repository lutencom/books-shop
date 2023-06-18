import React, {createContext, useEffect, useState} from "react";
import {addReviewsCollectionAndDocument, getReviewsFromDB} from "../firebase/firebase.utils";

export const ReviewsContext = createContext({
    reviews: [],
    setReviewsList: () => {
    },
    reviewsFromDB:[]
});

export const ReviewsProvider = ({children}) => {

    const [reviews, setReviewsList] = useState([]);
    const [reviewsFromDB, setReviewsListFromDB] = useState([]);

    //This should run only once.If running multiple times, it will set new values in db
    useEffect(() => {
        addReviewsCollectionAndDocument('reviews', reviews)
    }, [reviews])

    useEffect(() => {
            const getReviews = async () => {
                const reviewsMap = await getReviewsFromDB();
                setReviewsListFromDB(reviewsMap);
            }
            getReviews();
        }, [reviews]
    )

    const value = {reviews, setReviewsList, reviewsFromDB};
    return (
        <ReviewsContext.Provider value={value}> {children} </ReviewsContext.Provider>
    );
};
