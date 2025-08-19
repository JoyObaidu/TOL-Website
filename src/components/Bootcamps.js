import Carousel from "@/components/ui/Carousel";

export default function Bootcamp() {
  const images = [
    "/bootcamp-img.jpg",
    "/bootcamp2.png",
    "/bootcamp-img.jpg"
  ];

  return (
    <section className="relative max-w-7xl md:max-w-fit text-center z-10 py-10">
      <h3 className="text-2xl font-semibold text-center mb-6">Upcoming Bootcamps</h3>
      <Carousel
        images={images}
        leftArrow="/icons/previous.png"
        rightArrow="/icons/next.png"
      />
    </section>
  );
}
