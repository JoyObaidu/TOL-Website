"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function JobCard({ job }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col space-y-4 hover:shadow-xl transition w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        {/* Logo + Info */}
        <div className="flex items-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gray-100 rounded-full relative flex-shrink-0">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-1 ml-3 sm:ml-4">
            <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{job.company}</p>
          </div>
        </div>

        {/* Favourite icon */}
        <button
          className="p-2 rounded-full cursor-pointer hover:bg-gray-100"
          onClick={() => setIsFavourite(!isFavourite)}
        >
          <Image
            src={
              isFavourite
                ? "/icons/red-favourite.png"
                : "/icons/favourite-icon.png"
            }
            alt="favourite"
            width={22}
            height={22}
            className="sm:w-6 sm:h-6"
          />
        </button>
      </div>

      <hr className="w-full border-gray-200" />

      {/* Price + Tag */}
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-700 text-sm sm:text-base">{job.price}</p>
        <Button
          variant="secondary"
          size="md"
          className="bg-gray-200 border rounded-3xl border-gray-500 text-xs sm:text-sm px-3 sm:px-4"
        >
          Job
        </Button>
      </div>

      <div className="w-full flex flex-col items-start space-y-2">
        {/* Location */}
        <p className="text-gray-400 text-left text-xs sm:text-sm">
          {job.location}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-left text-sm sm:text-base">
          We are a fast growing agency seeking more people to partner with us.{" "}
          <a href="#" className="text-blue-600 hover:text-gray-600 text-sm">
            View More
          </a>
        </p>
      </div>

      {/* Actions */}
      <div className="w-full flex justify-between items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-red-100 text-red-400 border-none text-xs sm:text-sm px-3 sm:px-4"
        >
          Closed
        </Button>
        <Button
          variant="primary"
          size="md"
          className="text-gray-800 text-xs sm:text-sm px-3 sm:px-5"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}
