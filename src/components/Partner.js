import Image from "next/image";

export default function Partner() {
  return (
    <section className="relative w-full text-center pt-10 z-10 md:bg-gray-200 md:py-10">
      <h3 className="font-sectionTitle font-bold text-xl mb-20">Our Partners</h3>

      <div className="md:h-18 lg:h-24 mx-auto w-6xl">
        <Image
          src="/logos/partners-logo.png"
          alt="Partners Logo"
          fill
          style={{ objectFit: "contain" }}
          className="opacity-90"
        />
      </div>
    </section>
  );
}
