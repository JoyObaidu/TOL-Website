
import GalleryCard from "@/components/ui/GalleryCard";

const images = [
  { id: 1, src: "/gallery/img1.jpg", alt: "Event photo 1" },
  { id: 2, src: "/gallery/img2.jpg", alt: "Event photo 2" },
  { id: 3, src: "/gallery/img3.jpg", alt: "Event photo 3" },
  { id: 4, src: "/gallery/img4.jpg", alt: "Event photo 4" },
  { id: 5, src: "/gallery/img5.jpg", alt: "Event photo 5" },
  { id: 6, src: "/gallery/img6.jpg", alt: "Event photo 6" },
];

export default function Gallery() {
  return (
    <section className="w-full py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {images.map((image) => (
          <GalleryCard key={image.id} image={image} />
        ))}
      </div>

      <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        View More Images
      </button>
    </section>
  );
}
