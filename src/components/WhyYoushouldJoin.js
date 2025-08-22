import Image from "next/image";
import Card from "./ui/WhatWeDoCard";

export default function JoinUs() {
  return (
    <section className="relative w-full md:max-w-7xl mx-auto text-center py-10 px-6 md:px-20">
      <h3 className="text-2xl md:text-3xl font-sectionTitle font-semibold mb-8">Why you Should Join Us?</h3>

      <div className="grid grid-cols-1 font-body sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <Card
          icon="/icons/envelope.png"
          title="Find Jobs & Internships"
          description="Discover job and internship opportunities tailored for tech enthusiasts."
          className="bg-blue-50 border border-gray-400 transition-transform duration-300"
        />

        <Card
          icon="/icons/learn.png"
          title="Learn & Upskill"
          description="Access resources, courses, and for career growth."
          className="bg-gray-50 border border-gray-400 transition-transform duration-300 hover:scale-105"
        />
        <Card
          icon="/icons/team.png"
          title="Network & Connect"
          description="Engage with recruiters, professionals, and like-minded individuals."
          className="bg-purple-50 border border-purple-400 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
