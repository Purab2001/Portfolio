import { prisma } from "@/lib/prisma";
import ProjectDetails from "@/components/ProjectDetails";

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return <ProjectDetails project={project} />;
}
