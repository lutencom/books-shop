import React, {useEffect, useState} from "react";
import Masonry from "react-masonry-css";
import "./gallery.scss";
import Close from "../close-icon/close-icon";
import {ReactComponent as LeftIcon} from "../../Assets/shop-logos/chevron-left-duotone.svg";
import {ReactComponent as RightIcon} from "../../Assets/shop-logos/chevron-right-duotone.svg";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";

const Gallery = () => {
    const [images, setImages] = useState([])
    const [isPopupOpen, openPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(x => x.json()).then(y => setImages(y.products))
    }, [])
    const openImage = (index) => {
        openPopup(true);
        setActiveIndex(index);
    }
    const closePopup = () => {
        openPopup(false);
    }
    const goNext = () => {
        setActiveIndex(activeIndex + 1)

    }
    const goPrev = () => {
        activeIndex === 0 ? setActiveIndex(30) : setActiveIndex(activeIndex - 1);
        console.log(activeIndex)
    }
    return (
        <>
            <h2>Grid Gallery</h2>
            <Masonry
                breakpointCols={4}
                className="masonry-grid gallery"
                columnClassName="masonry-grid_column">
                {
                    images.map((item, index) => (
                        <img key={index} onClick={() => openImage(index)} className="card" src={item.thumbnail} alt=""/>
                    ))
                }
            </Masonry>
            {isPopupOpen && <div className="popup">
                {/*<div className="card size-full popup-img" style={{backgroundImage: `url(${images[activeIndex].thumbnail})`}}>*/}
                <img src={images[activeIndex].thumbnail} className="card size-full popup-img" alt=""/>
                <LeftIcon/>
                <span onClick={goPrev} className="prev icon"><LeftIcon/></span>
                <span onClick={goNext} className="next icon"><RightIcon/></span>
                <Close remove={closePopup}/>
                {/*</div>*/}
            </div>}
        </>
    )
}
export default Gallery;