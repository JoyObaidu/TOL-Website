import Image from "next/image";

export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <div className="w-24 h-24 relative mb-4">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
    </div>
  );
}
