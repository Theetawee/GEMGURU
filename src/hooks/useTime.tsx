/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

type TimeRemaining = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const useTime = () => {
    const openingDateTime = new Date("2024-12-31T09:00:00Z");

    const calculateTimeRemaining = (): TimeRemaining => {
        const now = new Date();
        const difference = openingDateTime.getTime() - now.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
    };

    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
        calculateTimeRemaining
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return timeRemaining;
};

export default useTime;
