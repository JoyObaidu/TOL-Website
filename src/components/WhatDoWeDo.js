import Button from "@/components/ui/Button";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="min-h-screen md:bg-white bg-gray-200 bg-cover bg-center flex flex-col justify-center items-center py-10 px-6 md:py-20 md:px-20 gap-y-10">
      {/* Heading */}
      <p className="text-lg md:text-xl font-body text-gray-700">
        What Do We Do
      </p>
      <h3 className="text-2xl md:text-4xl font-sectionHead font-semibold text-black text-left md:text-center leading-snug">
        Where Tech Minds Connect, Collaborate, and Rise
      </h3>

      {/* Grid: Image + Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-7xl">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/whatwedo.png"
            alt="What We Do"
            width={381}
            height={309}
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-start items-start md:items-start text-left md:text-left">
          <p className="font-body2 font-medium text-2xl-start">
            A space where the techies converge to CONNECT and IGNITE infinite
            possibilities.
          </p>
          <p className="mt-4">
            From seasoned experts, to budding developers, or
            simply tech enthusiasts, this is the perfect place to be.
          </p>

          <ul className="mt-4 list-disc list-inside text-left md:text-left space-y-2">
            <li>Stay abreast with the latest tech innovations and information!</li>
            <li>Get career advice from industry experts.</li>
            <li>Find collaboration opportunities that spark innovation.</li>
            <li>Share knowledge, resources, and experiences with like-minded individuals.</li>
            <li>Leverage LinkedIn&apos;s full potential to build your personal brand and network.</li>
            <li>Scale the tech ladder faster and easier.</li>
          </ul>
           
           <p className="mt-4">
            Now you never have to walk alone!
           </p>

          <div className="mt-8 w-full flex gap-4 flex-wrap justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full w-full px-14 py-3"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
