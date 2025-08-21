import Image from "next/image";

export default function TeamMemberCard({ member }) {
  return (
    <div className="relative bg-gray-200 rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition h-80 w-full">
      {/* Background image */}
      <Image
        src={member.photo}
        alt={member.name}
        fill
        style={{
          objectFit: "cover",
          objectPosition: member.objectPosition || "center",
        }}
      />

      {/* Overlay*/}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>

      {/* LinkedIn logo  */}
      <Image
        src="/logos/mdi_linkedin.png"
        alt="linkedin-logo"
        width={20}
        height={20}
        className="absolute top-4 right-4 z-20 cursor-pointer hover:scale-105 transition-transform"
      />

      {/* Content with semi-transparent background */}
      <div className="w-full px-3 absolute bottom-2 z-10">
        <div className="bg-black/30 rounded-xl backdrop-blur-md px-4 py-3 text-center">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-gray-200">{member.role}</p>
        </div>
      </div>
    </div>
  );
}
