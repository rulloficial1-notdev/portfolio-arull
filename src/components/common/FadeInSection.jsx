import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setVisible(true), delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [delay]);

    return (
        <div ref={domRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInSection;
