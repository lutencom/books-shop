import React from "react";
import './textarea.component.scss'

const Textarea = ({label, ...otherProps}) => {
        return (
        <div className={`${ otherProps.value.length ? "has-content" : ""} formInput`} >
            <label>{label}</label>
            <textarea {...otherProps}/>
        </div>


    )
}
export default Textarea;