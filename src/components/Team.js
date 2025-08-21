// components/TeamSection.js
import TeamMemberCard from "@/components/ui/TeammemeberCard";

const teamMembers = [
  { id: 1, name: "John Confidence Bello", role: "Community Team Lead", photo: "/team-photos/bello.png", objectPosition: "top"},
  { id: 2, name: "Wallah Waiji Precious", role: "Assistant Team Lead", photo: "/team-photos/precious.jpg",},
  { id: 3, name: "Mariam Bolatito Lawal", role: "Social Media Manager", photo: "/team-photos/mariam.jpg",},
  { id: 4, name: "Agwo Inalegwu James", role: "Cybersecurity Professional", photo: "/team-photos/james.jpg", objectPosition: "top"},
  { id: 5, name: "Deji Adenugba.jpg", role: "Product Manager", photo: "/team-photos/deji.jpg", objectPosition: "top"},
  { id: 6, name: "Oluwatobi Opeyemi", role: "UI/UX Designer", photo: "/team-photos/oluwatobi.jpg" },
  { id: 7, name: "Joy Obaidu", role: "Frontend developer", photo: "/team-photos/Joy.jpg" },
  { id: 8, name: "Damilola Ajele", role: "Backend developer", photo: "/team-photos/damiola.jpg" },
  { id: 9, name: "Uvere Amarachi Catherine", role: "Backend developer", photo: "/team-photos/amarachi.jpg" },
  { id: 10, name: "Oluwaponmile Aworetan", role: "Graphic Designer", photo: "/team-photos/ponmile.jpg", objectPosition: "top"},
  { id: 11, name: "Uvere Amarachi Catherine", role: "Backend developer", photo: "/team-photos/amarachi.jpg",objectPosition: "top"},
  { id: 12, name: "Oluwaponmile Aworetan", role: "Graphic Designer", photo: "/team-photos/ponmile.jpg", objectPosition: "top"},
];

export default function TeamSection() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      <button className="border border-gray-500 p-3 rounded-3xl mt-5 text-center">View All</button>
    </section>
  );
}
