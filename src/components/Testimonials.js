import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Priscilla Ashley",
    role: "Frontend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "Through Techies Kitchen, I landed my first remote job as a junior developer. The job board made it so easy to find roles tailored for beginners like me!"
  },
  {
    name: "Jane Doe",
    role: "Backend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "I gained so much confidence and landed a mid-level role after applying through Techies Kitchen’s job board."
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "The mentorship programs are life-changing. I’m now working at a top startup thanks to Techies Kitchen."
  },
  {
    name: "Lisa Brown",
    role: "Fullstack Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "I finally broke into tech after months of struggling. Techies Kitchen made it possible!"
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">Testimonials</h2>

        {/* Scrolling wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-72 flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
