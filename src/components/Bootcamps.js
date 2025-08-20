"use client";

import Carousel from "@/components/ui/Carousel";

export default function Bootcamp() {
  const images = [
    "/bootcamp-img.jpg",
    "/bootcamp2.png",
    "/bootcamp-img.jpg"
  ];

  return (
    <section className="relative bg-gray-50 w-full mx-auto px-6 py-12 z-10">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-sectionHead font-semibold text-left mb-4">
        Upcoming Bootcamps
      </h3>

      {/* Carousel */}
      <Carousel
        images={images}
        leftArrow="/icons/previous.png"
        rightArrow="/icons/next.png"
      />
    </section>
  );
}
