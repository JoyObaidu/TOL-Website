import Image from "next/image";
import Button from "@/components/ui/Button";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-4 hover:shadow-xl transition">
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Logo + Info */}
        <div className="flex">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl relative flex-shrink-0">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex flex-col gap-1 ml-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>

        {/* Favourite icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Image
            src="/icons/favourite-icon.png"
            alt="favourite"
            width={24}
            height={24}
          />
        </button>
      </div>

      <hr className="w-full border-gray-200" />

      {/* Price + Tag */}
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-700">{job.price}</p>
        <Button
          variant="secondary"
          size="md"
          className="bg-gray-200 border border-gray-500"
        >
          Job
        </Button>
      </div>

      {/* Description */}
      <p className="text-gray-500">
        We are a fast growing agency seeking more people to partner with us.{" "}
        <a href="#" className="text-blue-600 hover:underline">
          View More
        </a>
      </p>

      {/* Actions */}
      <div className="w-full flex justify-between items-center">
        <Button
          variant="secondary"
          size="sm"
          className="bg-red-100 text-red-500 border-none"
        >
          Closed
        </Button>
        <Button variant="primary" size="md">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
