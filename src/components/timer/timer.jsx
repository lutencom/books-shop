import {useRef, useState, useEffect} from "react";

const Timer = () => {
    const [isVisible, setVisibility] = useState(true);
    const [clicks, countClicks] = useState(0);
    const [time, setTime] = useState(10)
    const intervalRef = useRef();
    const increment = () => {
        countClicks(clicks + 1)
    }
    const decreaseNum = () => {
        setTime((prev) => prev - 1)
    };

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
        // if (time < 1) {
        //     clearInterval(intervalRef.current);
        //     setVisibility(false);
        // }
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [])

    return (
        <>
            <h2>Timer</h2>
            <div className="timer card">
                <h3>No. of clicks until timer disappears</h3>
                <p className='time'>{clicks}</p>
                {time < 1 ? clearInterval(intervalRef.current) :
                    <> <p>Time left: {time} seconds </p>
                        <button className='button full' onClick={increment}>+</button>
                    </>}
            </div>

        </>
    )
}
export default Timer;