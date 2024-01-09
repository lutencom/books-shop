import React, {useState} from 'react';
import "./accordion.scss"

const Accordion = () => {
    const slides = new Array(8).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus nec. Duis sagittis a sem porttitor condimentum. Curabitur blandit odio ut pretium malesuada. Quisque laoreet lacinia sapien sagittis congue. Sed molestie porta turpis at feugiat. Nulla ultricies cursus molestie. Quisque vitae placerat purus, sit amet suscipit libero.');
        const slidesWithTitles = [{
            title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus"
        },
        {
            title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus"
        },
        {
            title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus"
        },
        {
            title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus"
        },
        {
            title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae rutrum tellus. Cras maximus ipsum diam. Phasellus et eros at dui condimentum rutrum sed sit amet elit. Nam ultrices ipsum sem, a vulputate ligula dapibus"
        },
    ]
    const [isOpen, makeSlideOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState();
    const slideHandler = (index) => {
        setActiveIndex(index);
        makeSlideOpen(!isOpen);
    }
    return (
        <>
            <h2>Accordion</h2>
            {slidesWithTitles.map((slide, index) => {
                const ifOpen = activeIndex === index && isOpen;
                return (
                    <div key={index} className="card acc-slide" onClick={() => slideHandler(index)} >
                        <div className="acc-title">{slide.title}</div>
                        {ifOpen && <div className="acc-content"><p>{slide.content}</p></div>}
                    </div>
                )
            })}
        </>
    )
}
export default Accordion;