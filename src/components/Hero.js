import Button from "@/components/ui/Button";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[url('/Gradient.png')] bg-cover bg-center flex flex-col justify-between items-center gap-y-16 md:gap-y-24 p-6 md:p-10 lg:p-20">
      <Navbar />

      {/* Grid: Content + Image */}
      <div className="relative z-10 top-30 md:top-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-full">
      
        <Image
        src="/Bulb 2.png"
        width={24}
        height={24}
        alt="bulb"
        />

         <Image
        src="/Bulb 2.png"
        width={24}
        height={24}
        alt="bulb"
        />
           {/* Left: Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="flex items-center bg-white shadow-sm text-gray-600 mb-4">
            <Image
              src="/icons/typcn_flash.png"
              alt="Flash icon"
              width={24}
              height={24}
              className="inline-block mr-2"
            />
            <small>4.4K+ Techies in Less Than 24 Months</small>
          </span>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            You no longer have to ride <br className="hidden md:block" />
            the techies’ turbulent waves alone
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900">
            Connect, collaborate and grow with us
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 flex-wrap justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              style={{ width: "200px", height: "56px" }}
              className="rounded-full px-8 sm:px-14"
            >
              Join Us
            </Button>

            <Button
              variant="outline"
              size="lg"
              style={{ width: "200px", height: "56px" }}
              className="rounded-full px-8 sm:px-14"
            >
              Explore Clubs
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero-img.png"
            alt="Hero"
            width={381}
            height={309}
            className="object-contain w-52 md:w-[381px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
