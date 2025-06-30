import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects/project.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === id);
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading project...</div>;
  }

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  const { title, images = [], overview, features, techStacks, demoUrl, githubUrl } = project;

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      <StarBackground />

      {/* Back Arrow */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-3 lg:left-10 z-20 p-2 rounded-full bg-card/80 hover:bg-card shadow transition"
        aria-label="Back to Home"
        type="button"
      >
        <ArrowLeft className="w-6 h-6 text-primary" />
      </button>

      <main className="relative z-10 max-w-5xl mx-auto pt-20 pb-20 px-4">
        {/* Project Gallery */}
        <ProjectGallery images={images} />

        {/* Project Title and Overview */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">{overview}</p>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mb-12">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors flex items-center"
            >
              <ExternalLink size={20} className="inline-block mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors flex items-center"
            >
              <Github size={20} className="inline-block mr-2" />
              GitHub
            </a>
          )}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-3"
              >
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-4">Tech Stack</h2>
          <div className="flex flex-col gap-6">
            {Object.entries(techStacks).map(([category, stacks]) => (
              <div key={category}>
                <h3 className="capitalize text-start text-lg font-semibold mb-4">
                  {category.replace("_", " ")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stacks.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-card border border-border rounded-lg py-2 px-4"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
