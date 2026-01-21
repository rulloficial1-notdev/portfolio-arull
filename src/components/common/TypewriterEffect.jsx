import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words, wait = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (index >= words.length) {
            setIndex(0); // Reset loop
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), wait);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, wait]);

    return (
        <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
            {words[index].substring(0, subIndex)}
            <span className={`text-white ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </span>
    );
};

export default TypewriterEffect;
