
import Image from "next/image";

export default function GalleryCard({ image }) {
  return (
    <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{ objectFit: "cover" }}
        className="hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}
