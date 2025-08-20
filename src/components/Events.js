
import EventCard from "@/components/ui/EventCard";

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "March 10, 2025",
    time: "09:00 AM - 5:00 PM",
    location: "San Francisco, CA",
    description: "Join industry leaders and innovators for a 3-day tech conference.",
    image: "/events/event1.jpg",
  },
  {
    id: 2,
    title: "AI & ML Summit",
    date: "April 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "New York, NY",
    description: "Explore the latest in AI, ML, and data science with experts worldwide.",
    image: "/events/event2.jpg",
  },
  {
    id: 3,
    title: "Frontend Dev Meetup",
    date: "May 2, 2025",
    time: "06:00 PM - 8:00 PM",
    location: "Remote",
    description: "A community meetup for frontend developers to share insights and tools.",
    image: "/events/event3.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <button className="mt-10 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
        See All Events
      </button>
    </section>
  );
}

