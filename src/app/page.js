import Image from "next/image"
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import WhatWeDo from "@/components/WhatDoWeDo";
import WhyYouShouldJoin from "@/components/WhyYoushouldJoin";
import Bootcamp from "@/components/Bootcamps";
import RecommendedJobs from "@/components/Jobs";
import TeamSection from "@/components/Team";
import TestimonialsSection from "@/components/Testimonials";
import UpcomingEvents from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-between font-sans">
      <Hero />
      <Partner />
      <WhatWeDo />
      <WhyYouShouldJoin />
      <Bootcamp />
      <RecommendedJobs />
      <UpcomingEvents />
      <TeamSection />
      <TestimonialsSection />
      <Gallery />
    </div>
  );
}
