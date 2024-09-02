'use client';

import React, { useState, useEffect } from "react";

const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

export default function CountDown() {
    const targetDate = new Date('2024-12-12T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // 

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 max-w-full mx-auto rounded-lg ">
            <div className="flex flex-col items-center bg-slate-900 shadow-xl opacity-75 p-4 rounded-lg w-24 h-24 sm:w-28 sm:h-28">
                <div className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.days}</div>
                <div className="font-semibold text-gray-400 mt-1">Days</div>
            </div>
            <div className="flex flex-col items-center bg-slate-900 shadow-xl opacity-75 p-4 rounded-lg w-24 h-24 sm:w-28 sm:h-28">
                <div className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.hours}</div>
                <div className="font-semibold text-gray-400 mt-1">Hours</div>
            </div>
            <div className="flex flex-col items-center bg-slate-900 shadow-xl opacity-75 p-4 rounded-lg w-24 h-24 sm:w-28 sm:h-28">
                <div className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="font-semibold text-gray-400 mt-1">Minutes</div>
            </div>
            <div className="flex flex-col items-center bg-slate-900 shadow-xl opacity-75 p-4 rounded-lg w-24 h-24 sm:w-28 sm:h-28">
                <div className="text-3xl sm:text-4xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="font-semibold text-gray-400 mt-1">Seconds</div>
            </div>
        </div>
    );
}
