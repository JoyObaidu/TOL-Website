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
      <div className="relative w-full max-w-lg aspect-[16/9]">
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
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
          className="hover:scale-105 transition"
        >
          <Image src={leftArrow} alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={() => goToSlide("next")}
          className="hover:scale-105 transition"
        >
          <Image src={rightArrow} alt="Next" width={24} height={24} />
        </button>
      </div>
    </section>
  );
}
