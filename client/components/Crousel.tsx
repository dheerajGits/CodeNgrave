"use client";
import { useState, useEffect, useRef } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isHovered]);

  // Handle Touch Swipes
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!carouselRef.current) return;
      const touchStartX = e.touches[0].clientX;

      const handleTouchMove = (e: TouchEvent) => {
        const touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (diff < -50) {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
        }
      };

      const handleTouchEnd = () => {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };

      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("touchstart", handleTouchStart);
      }
    };
  }, [images.length]);

  return (
    <div className="p-4 flex flex-col items-center justify-center w-full">
      <div
        ref={carouselRef}
        className={`relative w-full xl:w-[650px] mx-auto overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center ${classNameImg}`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="transition-all duration-300 hover:scale-105 w-full h-auto xl:max-h-[500px] max-lg:w-96  rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex flex-row items-center justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              currentIndex === index
                ? "w-4 md:w-6 h-3"
                : "w-3 md:w-4 h-3 bg-opacity-40"
            } bg-[#8faecd] transition-all duration-300 rounded-full hover:cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
