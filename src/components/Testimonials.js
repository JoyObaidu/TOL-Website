import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    image: "/testimonials/alice.png",
    quote: "TechiesHub helped me land my first job in tech. The community is amazing!"
  },
  {
    name: "Bob Smith",
    role: "UI/UX Designer",
    image: "/testimonials/bob.png",
    quote: "I learned so much from the bootcamps. Highly recommend!"
  },
  {
    name: "Cathy Lee",
    role: "Data Analyst",
    image: "/testimonials/cathy.png",
    quote: "The mentorship and events really helped me grow professionally."
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    image: "/testimonials/david.png",
    quote: "Joining TechiesHub was the best decision I made this year!"
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Members Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
