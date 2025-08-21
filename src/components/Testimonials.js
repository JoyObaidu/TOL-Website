import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Priscilla Ashley",
    role: "Frontend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "Through Techies Kitchen, I landed my first remote job as a junior developer. The job board made it so easy to find roles tailored for beginners like me!"
  },
    {
    name: "Priscilla Ashley",
    role: "Frontend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "Through Techies Kitchen, I landed my first remote job as a junior developer. The job board made it so easy to find roles tailored for beginners like me!"
  },
    {
    name: "Priscilla Ashley",
    role: "Frontend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "Through Techies Kitchen, I landed my first remote job as a junior developer. The job board made it so easy to find roles tailored for beginners like me!"
  },
    {
    name: "Priscilla Ashley",
    role: "Frontend Developer",
    image: "/testimonials-img/image_fx (2).png",
    quote: "Through Techies Kitchen, I landed my first remote job as a junior developer. The job board made it so easy to find roles tailored for beginners like me!"
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
