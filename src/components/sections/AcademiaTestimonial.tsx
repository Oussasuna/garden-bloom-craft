import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "JobexCV helped me land my first job in just 2 weeks after graduation. The AI resume builder tailored my CV perfectly for each application.",
    name: "Sarah Chen",
    designation: "Computer Science Graduate — Hong Kong University",
    src: "/lovable-uploads/basma-960.jpg",
  },
  {
    quote: "I applied to 50 companies in one day using the auto-apply feature. I got 8 interviews. This tool is a game changer for students.",
    name: "Marcus Johnson",
    designation: "Business Graduate — Imperial College London",
    src: "/lovable-uploads/graduate-male.png",
  },
  {
    quote: "The interview preparation feature helped me practice with real questions. I felt so confident going into my interviews.",
    name: "Aisha Patel",
    designation: "Engineering Student — HKU Business School",
    src: "/lovable-uploads/graduate1.png",
  },
  {
    quote: "As an international student, finding jobs was overwhelming. JobexCV simplified everything and helped me stand out to employers worldwide.",
    name: "Carlos Rivera",
    designation: "MBA Student — CityU Hong Kong",
    src: "/lovable-uploads/graduate2.png",
  },
  {
    quote: "The AI cover letter generator saved me hours every week. Each letter felt personal and perfectly matched the job description.",
    name: "Emma Thompson",
    designation: "Marketing Graduate — Hong Kong Polytechnic University",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
  },
];

export default function AcademiaTestimonial() {
  return (
    <section className="bg-white py-12 md:py-16">
      <p className="text-center text-sm text-blue-500 font-medium mb-2">Student Success Stories</p>
      <h2 className="text-center text-3xl font-bold mb-0">What our students say</h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} className="py-8" />
    </section>
  );
}
