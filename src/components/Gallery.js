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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {images.map((image) => (
          <GalleryCard key={image.id} image={image} event={image} />
        ))}
      </div>

      <button className="border border-gray-500 py-3 px-5 rounded-2xl mt-5 text-center">View More Images</button>
    </section>
  );
}
