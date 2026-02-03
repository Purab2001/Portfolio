import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/project.json";

const projects = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  description: p.overview.substring(0, 100) + "...", // Truncate overview for description
  image: p.images[0] || "/placeholder.jpg",
  tags: p.techStacks?.frontend?.slice(0, 3) || [],
  demoUrl: p.demoUrl,
  githubUrl: p.githubUrl,
  jsonId: p.id
}));

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              My Projects
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="text-gradient"> Projects</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-54 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                  <Link
                    className="cosmic-button flex items-center justify-center gap-1 px-3 h-8 rounded-md text-xs"
                    href={`/project-details/${project.jsonId}`}
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
          <Link
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Purab2001"
          >
            Check My Github <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
