"use client";
import { useState, useEffect } from "react";

const Carousel = ({
  images,
  className,
  classNameImg,
}: {
  images: string[];
  className?: string;
  classNameImg?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div
        className={`relative w-[650px] mx-auto overflow-hidden ${className}`}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center !${classNameImg}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-1 -mt-10">
        {[...Array(images.length)].map((_, index) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(index);
              }}
              key={index}
              className={`${
                currentIndex == index
                  ? "w-4 md:w-8 h-3"
                  : "w-2.5 md:w-4 h-3 bg-opacity-40"
              } bg-[#8faecd] transition-all duration-300 rounded-full hover:cursor-pointer`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
