import Image from "next/image";

export default function TestimonialCard({ name, role, image, quote }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center relative">
      {/* Avatar */}
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-contain"
          sizes="96px"
        />
      </div>

      {/* Text content */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-3 text-gray-700 text-sm">{quote}</p>

      {/* Rating Stars */}
      <div className="mt-4 flex justify-between w-full px-6">
        {/* Left stars */}
        <div className="flex space-x-1">
          <Image src="/icons/solar_star-bold.png" alt="star" width={18} height={18} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={18} height={18} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={18} height={18} />
        </div>

        {/* Right stars */}
        <div className="flex space-x-1">
          <Image src="/icons/solar_star-bold.png" alt="star" width={18} height={18} />
          <Image src="/icons/solar_star-bold.png" alt="star" width={18} height={18} />
        </div>
      </div>
    </div>
  );
}
