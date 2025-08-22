// components/RecommendedJobs.js
import JobCard from "@/components/ui/JobCard";

const jobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Samp Inc",
    location: "Ikeja Lagos, Nigeria",
    logo: "/logos/company1.png",
    price: "N500,000",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateX",
    location: "San Francisco, CA",
    logo: "/logos/company2.png",
    price: "N500,000",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    logo: "/logos/company3.png",
    price: "N500,000",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataWorks",
    location: "Boston, MA",
    logo: "/logos/company4.png",
    price: "N500,000",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "NextGen",
    location: "Austin, TX",
    logo: "/logos/company5.png",
    price: "N500,000",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloudify",
    location: "Seattle, WA",
    logo: "/logos/company6.png",
    price: "N500,000",
  },
];

export default function RecommendedJobs() {
  return (
    <section className="py-12 px-6 w-full bg-blue-50 text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-10">Recommended Jobs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
    </section>
  );
}
