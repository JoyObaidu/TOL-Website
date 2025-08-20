
import EventCard from "@/components/ui/EventCard";

const events = [
  {
    id: 1,
    title: "Linkedin Local, Akure ",
    date: "15th June, 2025",
    time: "10:00am WAT",
    location: "Ikeja Lagos, Nigeria",
    image: "/linkedin_local_akure_cover (1).png",
  },
{
    id: 2,
    title: "Linkedin Local, Akure ",
    date: "15th June, 2025",
    time: "10:00am WAT",
    location: "Ikeja Lagos, Nigeria",
    image: "/linkedin_local_akure_cover (1).png",
  },
  {
    id: 3,
    title: "Linkedin Local, Akure ",
    date: "15th June, 2025",
    time: "10:00am WAT",
    location: "Ikeja Lagos, Nigeria",
    image: "/linkedin_local_akure_cover (1).png",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full px-6 py-12 bg-white text-left">
      <h2 className="text-3xl font-semibold mb-12">Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

    </section>
  );
}

