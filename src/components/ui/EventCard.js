// src/components/ui/EventCard.js
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function EventCard({ event }) {
  const details = [
    { icon: "/icons/solar_calendar-linear.png", label: event.date },
    { icon: "/icons/mingcute_time-line.png", label: event.time },
    { icon: "/icons/weui_location-outlined.png", label: event.location },
  ];

  return (
    <div className="w-full py-6 flex flex-col h-100">
      <div className="w-full h-40 relative mb-4">
        <Image
          src={event.image}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      <div className="w-full">
          <div className="w-full flex justify-between">
            <h3 className="text-lg md:text-xl font-semibold mb-2">{event.title}</h3>
            <Button variant="primary" size="sm">
              Register
            </Button>
          </div>

          <div className="text-gray-600 text-sm space-y-1 mb-2">
            {details.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
      
      </div>
    </div>
  );
}
