import React, { useState } from "react";
import moment from "moment";

const Tick=()=> {
    const [currentTime, setCurrentTime] = useState('--:--:-- --')
    setInterval(() => {
        // const timeVal = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true }).toString();
        const timeVal = moment(new Date()).format('hh:mm:ss a');
        setCurrentTime(timeVal);
    }, 500);
    return (
        <div>{currentTime}</div>
    );
}

export default Tick;