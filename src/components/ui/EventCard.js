// src/components/ui/EventCard.js
import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
      <div className="w-full h-40 relative mb-4">
        <Image
          src={event.image}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-2">
        {event.date} · {event.time} · {event.location}
      </p>
      <p className="text-gray-700 flex-grow">{event.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Register
      </button>
    </div>
  );
}
