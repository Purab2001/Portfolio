import projects from "@/data/project.json";
import ProjectDetails from "@/components/ProjectDetails";

// Add this line to enable Edge Runtime
export const runtime = "edge";

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return <ProjectDetails project={project} />;
}
