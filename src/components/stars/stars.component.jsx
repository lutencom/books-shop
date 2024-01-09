import React, {useState} from "react";
import "./stars.component.scss"
import Star from "./star.component";

const Stars = () => {
    const [isFull, setFull] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(0);

    const stars = new Array(5).fill(0);
    const hoverStar = (index) => {
        setFull(!isFull);
        setHoverIndex(index+1);
    }
    const hoverLeaveStar = () => {
        setHoverIndex(0);
    }
    const clickStar = (index) => {
        setFull(true);
        setActiveIndex(index+1);
    }
    return (
        <div className='stars'>
            <h2>Stars reviews</h2>
            {stars.map((star, index) => {
                const makeFullStar = isFull ? index < activeIndex : hoverIndex > index
                return (
                    <Star key={index}
                          status={makeFullStar}
                          onClick={() => clickStar(index)}
                          onMouseEnter={() => hoverStar(index)}
                          onMouseOut={()=>hoverLeaveStar()}

                    />
                )
            })}
        </div>
    )
}
export default Stars;