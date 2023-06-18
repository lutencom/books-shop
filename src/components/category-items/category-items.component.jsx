import React, {useState} from "react";
import CategoryItem from "../category-item/category-item.component";
import './category-items.component.scss';
import Logo2 from "../../Assets/categories-logos/circle-heart-duotone.svg";
import Logo3 from "../../Assets/categories-logos/landmark-duotone.svg";
import Logo5 from "../../Assets/categories-logos/palette-duotone.svg";
import Logo4 from "../../Assets/categories-logos/scale-unbalanced-duotone.svg";
import Logo1 from "../../Assets/categories-logos/telescope-duotone.svg";

const CategoryItems = () => {
    const sections = [
        {
            title: "Science",
            imageUrl: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size: "col-1-2",
            id: 1,
            logo: {Logo1},
        },
        {
            title: "Romance",
            imageUrl: "https://images.pexels.com/photos/812258/pexels-photo-812258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size: "col-1-2",
            id: 2,
            logo: {Logo2},
        },
        {
            title: "Hystory",
            imageUrl: "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size: "col-1-3",
            id: 3,
            logo: {Logo3},
           },
        {
            title: "Justice",
            imageUrl: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size: "col-1-3",
            id: 4,
            logo: {Logo4},
          },
        {
            title: "Arts",
            imageUrl: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size: "col-1-3",
            id: 5,
            logo: {Logo5},
        }

    ]
    const [oldSections, setSections] = useState(sections);
    return(
        <div className="container">
            <div className="inner-container grid">
                {
                    oldSections.map(({id, index, ...otherSectionsProps}) => (
                            <CategoryItem key={id} index={id} {...otherSectionsProps}/>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default CategoryItems;