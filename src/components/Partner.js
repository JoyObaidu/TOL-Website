import Image from "next/image";

export default function Partner() {
  return (
    <section className="relative py-5 w-full text-center z-10 md:bg-gray-200 md:py-10">
      <h3 className="text-xl font-semibold mb-20">Our Partners</h3>

      <div className="md:h-18 lg:h-24 mx-auto w-6xl">
        <Image
          src="/logos/partners-logo.png"
          alt="Partners Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
