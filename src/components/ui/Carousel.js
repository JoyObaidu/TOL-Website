"use client";

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images, leftArrow, rightArrow }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const goToSlide = (direction) => {
    if (direction === "next") {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    } else {
      setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    }
  };

  return (
    <section className="relative mx-auto overflow-hidden flex flex-col items-center">
      {/* Slides */}
      <div className="relative w-lg h-36 md:h-52">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index}`}
              fill
              className="object-cover rounded-2xl"
              priority={index === current} 
            />
          </div>
        ))}
      </div>

      {/* Arrows below images */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => goToSlide("prev")}
          className="rounded-full shadow-md p-2 hover:scale-105 transition bg-white"
        >
          <Image src={leftArrow} alt="Previous" width={32} height={32} />
        </button>
        <button
          onClick={() => goToSlide("next")}
          className="rounded-full shadow-md p-2 hover:scale-105 transition bg-white"
        >
          <Image src={rightArrow} alt="Next" width={32} height={32} />
        </button>
      </div>
    </section>
  );
}
