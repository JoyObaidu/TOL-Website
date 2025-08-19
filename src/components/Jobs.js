// components/RecommendedJobs.js
import JobCard from "@/components/ui/JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    logo: "/logos/company1.png",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateX",
    location: "San Francisco, CA",
    logo: "/logos/company2.png",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    logo: "/logos/company3.png",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataWorks",
    location: "Boston, MA",
    logo: "/logos/company4.png",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "NextGen",
    location: "Austin, TX",
    logo: "/logos/company5.png",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloudify",
    location: "Seattle, WA",
    logo: "/logos/company6.png",
  },
];

export default function RecommendedJobs() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Recommended Jobs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <button className="mt-10 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
        See More
      </button>
    </section>
  );
}
