import React, {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import FormInput from "../../form-input/form-input.component";
import Textarea from "../../textarea/textarea.component";
import Masonry from "react-masonry-css";
import {ReviewsContext} from "../../contexts/reviews.context";

const Reviews = () => {
    const {currentUser} = useContext(UserContext);

    const currentName = currentUser.displayName;

    const initialFields = {
        user: {currentUser} ? currentName : 'Your name',
        review: ""
    }
    const {reviews, reviewsFromDB, setReviewsList} = useContext(ReviewsContext);
    const resetForm = () => setFields(initialFields);

    const [fields, setFields] = useState(initialFields);

    const {user, review} = fields;

    const handleInput = (event) => {
        const {name, value} = event.target;
        setFields({...fields, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setReviewsList(reviews.concat(fields));
        resetForm();
    }
    return (
        <div className="container">
            <div className="inner-container grid">

                <div className="col-1">
                    <h1>Reviews</h1>
                </div>
                { currentUser &&
                <div className="col-1-3">
                    <form action="" onSubmit={handleSubmit}>
                        <FormInput name="user"
                                   type="text"
                                   value={user}
                                   onChange={handleInput}
                                   label="Add your name here..."/>
                        <Textarea name="review"
                                  type="text"
                                  value={review}
                                  onChange={handleInput}
                                  label="Add your review here..."/>
                        <input type="submit" className='button full' value='Display review'/>
                    </form>
                </div>
                }
            </div>
            <div className="inner-container">
                <Masonry
                    breakpointCols={4}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column">
                    {reviewsFromDB.map((item, index) => (
                            <div className='card review-item' key={index}>
                                <p>{item.review}</p>
                                <h3>{item.user}</h3>
                            </div>
                        )
                    )}
                </Masonry>
            </div>
        </div>

    )
}
export default Reviews;