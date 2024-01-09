import React from "react";
import "./stars.component.scss"
const Star = (props) => {
    const EMPTY_STAR =
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg";
    const FULL_STAR =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
const {status, ...otherProps} = props;
    return(
        <img src={status ? FULL_STAR : EMPTY_STAR} {...otherProps} alt=""/>
    )
}
export default Star;