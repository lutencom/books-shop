import "./progress-bar.scss"
import React, {useState} from "react";

const ProgressBar = () => {
    const [widthVal, setWidth] = useState(1)
    const setProgress = (e) => {
        const val = e.target.value + "%";
        setWidth(val);
    }
    const widthState = {
        width: widthVal
    }
    return (
        <>
            <h2>Progress bar</h2>
            <input type="number" min="1" max="100" onChange={setProgress}/>
            <div className='progress-bar'>
                <div style={widthState} className="progress"/>
            </div>
        </>
    )
}
export default ProgressBar;