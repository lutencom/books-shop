import React from "react";
import './form-input.component.scss'

const FormInput = ({label, ...otherProps}) => {
        return (
        <div className={`${ otherProps.value.length ? "has-content" : ""} formInput`} >
            <label>{label}</label>
            <input {...otherProps}/>
        </div>


    )
}
export default FormInput;