import Image from "next/image";
import Card from "./ui/Card";

export default function JoinUs() {
  return (
    <section className="relative w-full md:max-w-7xl mx-auto text-center py-10 px-6 md:px-20">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">Join Us</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <Card
          icon="/icons/envelope.png"
          title="Connect"
          description="Join a community of like-minded individuals."
          className="bg-blue-100 border border-gray-400 transition-transform duration-300"
        />

        <Card
          icon="/icons/learn.png"
          title="Collaborate"
          description="Work together on exciting projects."
          className="bg-gray-100 border border-gray-400 transition-transform duration-300 hover:scale-105"
        />
        <Card
          icon="/icons/team.png"
          title="Grow"
          description="Enhance your skills and knowledge."
          className="bg-purple-100 border border-purple-400 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
