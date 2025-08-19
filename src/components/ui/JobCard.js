import Image from "next/image";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition">
      <div className="w-20 h-20 relative">
        <Image
          src={job.logo}
          alt={job.company}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Apply
      </button>
    </div>
  );
}
