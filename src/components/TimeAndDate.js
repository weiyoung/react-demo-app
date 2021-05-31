import { useState, useEffect } from "react";

export default function TimeAndDate() {
    const [dateTime, setDateTime] = useState(new Date())
    useEffect( () => {
        setInterval( () => setDateTime(new Date()), 1000)
    }, []
    )
    return (
        <div>
            The date is: {dateTime.toLocaleTimeString()}
        </div>
    )
}
