import Button from "@/components/ui/Button";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="min-h-screen md:bg-white bg-gray-200 bg-cover bg-center flex flex-col justify-center items-center py-10 px-6 md:py-20 md:px-20 gap-y-10">
      {/* Heading */}
      <p className="text-lg md:text-xl font-medium text-gray-700">What Do We Do</p>
      <h3 className="text-2xl md:text-4xl font-bold text-black text-center md:text-center leading-snug">
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
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <b className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4 md:mb-6">
            You no longer have to ride <br />
            the techies’ turbulent waves alone
          </b>

          <ul className="mt-4 list-disc list-inside text-left md:text-left space-y-2">
            <li>Connect with like-minded individuals</li>
            <li>Collaborate on exciting projects</li>
            <li>Grow your skills and knowledge</li>
            <li>Connect with like-minded individuals</li>
            <li>Collaborate on exciting projects</li>
            <li>Grow your skills and knowledge</li>
          </ul>

          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full px-14 py-3"
            >
              Join Community
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
