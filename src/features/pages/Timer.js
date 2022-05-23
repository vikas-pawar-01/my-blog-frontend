import React, { useEffect, useState } from "react";

const Timer = () => {

    const [timer, setTimer] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const strDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            setTimer(strDate);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
        }, 1000000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <h2>Timer: {timer}</h2>
    );
}

export default Timer;