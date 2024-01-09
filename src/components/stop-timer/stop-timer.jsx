import {useRef, useState, useEffect} from "react";

const StopTimer = () => {
    const [time, setTime] = useState(0)
    const [stopped, stopTime] = useState()
    const intervalRef = useRef(0);
    const colorBtnRef = useRef();

    const initialColor = "#73a13b";
    const activeColor = "#ff6699";
    const increment = () => {
           setTime(num => (
                num + 1
            ));
    }
    const startTimer = () => {
        if (time === 0 || stopped){
        intervalRef.current = setInterval(increment, 1000);
        stopTime(false);
    }}
    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = 0;
        stopTime(true);
    }
    const resetTimer = () => {
        stopTimer();
        setTime(0);

    }
    return (
        <>
            <h2>Timer</h2>
            <div className="timer card">
                <h3>No. of clicks until timer disappears</h3>
                <p>Timer: {time} seconds </p>
                <button ref = {colorBtnRef} className='button full' style={{backgroundColor: colorBtnRef.current, borderColor:colorBtnRef.current}}
                        onClick={startTimer}>Start
                </button>
                <button className='button full margin-left' onClick={stopTimer}>Stop</button>
                <button className='button outline margin-left' onClick={resetTimer}>Reset</button>

            </div>

        </>
    )
}
export default StopTimer;