import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Flynar",
    description:
      "A flight booking web application that allows users to search, compare, and purchase airline tickets easily. Features include real-time flight data, responsive design, and a smooth booking experience from search to checkout.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Typescript", "NodeJS", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/ThanWeb/Flynar-UI/tree/search-flight-page",
  },
  {
    title: "IT Solution (ITSO)",
    description:
      "An internal web application developed for employees of Diskominfo Jawa Barat, providing a centralized platform for managing employee-related needs such as asset borrowing, meeting room reservations, employee data, and leave tracking. Designed to streamline internal workflows and improve efficiency within the organization.",
    image: "/projects/project2.png",
    tags: ["Laravel", "PostgreSQL", "Bootstrap"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Center of Excellence",
    description:
      "A collaboration platform designed to connect universities, students, lecturers, startups, and industry partners, with Telkom as the orchestrator to drive AI innovation in Indonesia. The platform enables knowledge sharing, project collaboration, and ecosystem growth in the field of artificial intelligence.",
    image: "/projects/project3.png",
    tags: [
      "React.js",
      "AI Google Studio",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://aicenterofexcellence.netlify.app/",
    github: "https://github.com/aduf2907/ai-coe-visitor-registration-rev",
  },
  {
    title: "Kadin - Member",
    description:
      "A web application designed to manage KADIN Indonesia membership processes, including registration, renewal, and member data management based on official procedures. The system streamlines administrative workflows and ensures an efficient and structured membership management experience.",
    image: "/projects/project4.png",
    tags: [
      "React.js",
      "AI Google Studio",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://kadin-membership.netlify.app/",
    github: "https://github.com/aduf2907/portal-kadin-indonesia",
  },
  {
    title: "Kadin 360",
    description:
      "A comprehensive digital platform for KADIN Indonesia members, serving as a centralized hub for communication, knowledge sharing, and business matching. Enhanced with AI-driven insights and recommendations, the platform helps members discover opportunities, connect with partners, and make informed decisions.",
    image: "/projects/project5.png",
    tags: [
      "React.js",
      "AI Google Studio",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://kadin360-v1.netlify.app/",
    github: "https://github.com/aduf2907/kadin-360-ver",
  },
  {
    title: "AI CoE Registration",
    description:
      "A professional registration portal for visitors of the AI Center of Excellence, designed to streamline the registration process with a simple and user-friendly interface. Integrated with Google Sheets to manage and store visitor data efficiently in real-time.",
    image: "/projects/project6.png",
    tags: [
      "React.js",
      "AI Google Studio",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://register-aicoe.netlify.app/",
    github: "https://github.com/aduf2907/PWA-RegisterAICoE",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Real projects,
            <span className="font-serif italic font-normal text-white">
              {" "}
              real impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects I’ve built, ranging from internal systems
            to scalable web applications, focused on solving real-world
            problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...projects].reverse().map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="#projects">
            View All Projects
            <ArrowUpRight />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
