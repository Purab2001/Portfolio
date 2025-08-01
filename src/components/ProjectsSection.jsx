import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Paynode",
    description:
      "Employee management and payroll platform streamlining HR tasks and operations for modern businesses.",
    image: "/projects/project1.jpg",
    tags: ["React JS", "Stripe", "MongoDB"],
    demoUrl: "https://paynode-2025.web.app",
    githubUrl: "https://github.com/Purab2001/Paynode_client",
    jsonId: "paynode",
  },
  {
    id: 2,
    title: "RepairRight",
    description:
      "RepairRight is a platform for booking, tracking, and managing home repair services with ease.",
    image: "/projects/project2.png",
    tags: ["React JS", "TailwindCSS", "MongoDB"],
    demoUrl: "https://repair-right-1a8c9.web.app",
    githubUrl: "https://github.com/Purab2001/Repair_Right",
    jsonId: "repair-right",
  },
  {
    id: 3,
    title: "HobbyHub",
    description:
      "HobbyHub is a web app to discover, join, and manage hobby groups-connect and share with others.",
    image: "/projects/project3.png",
    tags: ["React", "Firebase", "JavaScript"],
    demoUrl: "https://hobbyhub-19bff.web.app",
    githubUrl: "https://github.com/Purab2001/hobbyhub",
    jsonId: "hobbyhub",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <Link
                    className="cosmic-button flex items-center justify-center gap-1 px-3 h-8 rounded-md text-xs"
                    to={`/project-details/${project.jsonId}`}
                    title="View Details"
                  >
                    <span className="flex items-center gap-1 w-full justify-center">
                      <Eye size={16} />
                      <span className="leading-none">View Details</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Purab2001"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
