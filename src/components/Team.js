// components/TeamSection.js
import TeamMemberCard from "@/components/ui/TeammemeberCard";

const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "CEO", photo: "/team/alice.jpg" },
  { id: 2, name: "Bob Smith", role: "CTO", photo: "/team/bob.jpg" },
  { id: 3, name: "Carol White", role: "Lead Designer", photo: "/team/carol.jpg" },
  { id: 4, name: "David Lee", role: "Backend Engineer", photo: "/team/david.jpg" },
  { id: 5, name: "Eva Green", role: "Frontend Engineer", photo: "/team/eva.jpg" },
  { id: 6, name: "Frank Brown", role: "Product Manager", photo: "/team/frank.jpg" },
  { id: 7, name: "Grace Kim", role: "Marketing Lead", photo: "/team/grace.jpg" },
  { id: 8, name: "Henry Wilson", role: "QA Engineer", photo: "/team/henry.jpg" },
  { id: 9, name: "Ivy Adams", role: "HR Manager", photo: "/team/ivy.jpg" },
  { id: 10, name: "Jack Taylor", role: "DevOps Engineer", photo: "/team/jack.jpg" },
  { id: 11, name: "Karen Scott", role: "UI/UX Designer", photo: "/team/karen.jpg" },
  { id: 12, name: "Leo Martin", role: "Data Analyst", photo: "/team/leo.jpg" },
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
