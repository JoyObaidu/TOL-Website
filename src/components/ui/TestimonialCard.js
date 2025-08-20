import Image from "next/image";

export default function TestimonialCard({ name, role, image, quote }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <p className="text-gray-700 mb-4">&quot;{quote}&quot;</p>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}