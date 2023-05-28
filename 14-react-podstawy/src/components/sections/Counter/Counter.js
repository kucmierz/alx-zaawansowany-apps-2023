import { useEffect, useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.timer);
    let time = 5
    useEffect(() => {
        const counter = setInterval(() => {
            time--;
            if (time < 1) clearInterval(counter);
            console.log(time, count);
            setCount(time);
        }, 1000)

    }, []);

    const currentDate = props.time.toISOString();

    if (time < 1) return null
    return (
        // <p>Dzien dzisiejszy {currentDate}</p>
        <div>{count}</div>
    );
}

export default Counter;