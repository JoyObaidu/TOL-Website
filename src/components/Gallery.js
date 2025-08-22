import GalleryCard from "@/components/ui/GalleryCard";

const images = [
  { id: 1, src: "/gallery-photos/gallery-1.png", alt: "Event photo 1", title: "Linkendin Local, Akure" },
  { id: 2, src: "/gallery-photos/stem-list-EVgsAbL51Rk-unsplash.png", alt: "Event photo 2", title: "Sun 10th June, 2025" },
  { id: 3, src: "/gallery-photos/gallery-3.jpg", alt: "Event photo 3", title: "Sun 10th June, 2025" },
];

export default function Gallery() {
  return (
    <section className="w-full py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

      {/* Force 3 cols so row/col spans work */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* First row: spans first 2 cols */}
        <div className="sm:col-span-2">
          <GalleryCard image={images[0]} event={images[0]} />
        </div>

        {/* Tall image on the right, spans 2 rows */}
        <div className="sm:row-span-2">
          <GalleryCard image={images[2]} event={images[2]} />
        </div>

        {/* Second row: spans first 2 cols */}
        <div className="sm:col-span-2">
          <GalleryCard image={images[1]} event={images[1]} />
        </div>
      </div>

      <button className="border border-gray-500 py-3 px-5 rounded-3xl mt-5 text-gray-700 text-center">
        View All
      </button>
    </section>
  );
}
