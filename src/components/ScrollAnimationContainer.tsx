import React, { useEffect, useRef, useState } from "react";

interface Props{
    children:React.ReactNode,
    className?:string
}

const ScrollAnimationContainer: React.FC<Props> = ({children,className}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optional: Stop observing after animation
          }
        });
      },
      { threshold: 0.25 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full h-full image-animation ${isVisible ? "show" : ""} ${className}`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationContainer;
