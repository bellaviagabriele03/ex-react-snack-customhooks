import { useState, useEffect } from "react";

export default function useDate() {

    const [curDate, setCurDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return curDate.toLocaleString();
}
