import Image from "next/image";

export default function TestimonialCard({ name, role, image, quote }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center relative">
      {/* Avatar inside card */}
      <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-3 text-gray-700 text-sm">{quote}</p>

      {/* Rating Stars */}
      <div className="mt-4 flex justify-center gap-2 w-full px-6">
        <div className="flex">
          <Image src="/icons/solar_star-bold.png" alt="star" width={16} height={16} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={16} height={16} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={20} height={20} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={16} height={16} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}
