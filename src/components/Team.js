// components/TeamSection.js
import TeamMemberCard from "@/components/ui/TeammemeberCard";

const teamMembers = [
  { id: 1, name: "John Confidence Bello", role: "Community Team Lead", photo: "/team-photos/bello.png" },
  { id: 2, name: "Wallah Waiji Precious", role: "Assistant Team Lead", photo: "/team-photos/precious.jpg" },
  { id: 3, name: "Mariam Bolatito Lawal", role: "Social Media Manager", photo: "/team-photos/mariam.jpg" },
  { id: 4, name: "Agwo Inalegwu James", role: "Cybersecurity Professional", photo: "/team-photos/james.jpg" },
  { id: 5, name: " Deji Adenugba.jpg", role: "Product Manager", photo: "/team-photos/deji.jpg" },
  { id: 6, name: "Frank Brown", role: "Product Manager", photo: "/team-photos/oluwatobi.jpg" },
  { id: 7, name: "Grace Kim", role: "Marketing Lead", photo: "/team-photos/Joy.jpg" },
  { id: 8, name: "Henry Wilson", role: "QA Engineer", photo: "/team-photos/damilola.jpg" },
  { id: 9, name: "Ivy Adams", role: "HR Manager", photo: "/team-photos/amarachi.jpg" },
  { id: 10, name: "Jack Taylor", role: "DevOps Engineer", photo: "/team-photos/oluwaponmile.jpg" },
  { id: 11, name: "Karen Scott", role: "UI/UX Designer", photo: "/team-photos/joy.jpg" },
  { id: 12, name: "Leo Martin", role: "Data Analyst", photo: "/team-photos/deji.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
