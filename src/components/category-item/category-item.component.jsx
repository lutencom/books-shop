import React from "react";
import './category-item.component.scss';
import {useNavigate, Link} from 'react-router-dom';

const CategoryItem = ({title, imageUrl, size, logo, index}) => {
    let slug = title.toLowerCase();

    return (
        <div className={`category bg-image ${size}`}
             style={{backgroundImage: `url(${imageUrl})`}}
          >

            <img src={logo} alt=""/>
            <div className="content">
                <h2 className="title">
                    {title}
                </h2>
                <Link to={`shop/${slug}`}>
                <span className="subtitle">
                     Shop now
                </span>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem;