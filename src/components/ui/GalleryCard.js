import Image from "next/image";

export default function GalleryCard({ image, event }) {
  return (
    <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{ objectFit: "cover" }}
        className="hover:scale-110 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-3">
        <p className="text-white text-sm sm:text-base font-medium">
          {event?.title}
        </p>
      </div>
    </div>
  );
}
