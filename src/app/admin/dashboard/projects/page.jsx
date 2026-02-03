import { getProjects } from "@/actions/admin";

export const dynamic = "force-dynamic";

import { ProjectForm } from "@/components/admin/ProjectForm";
import { ProjectList } from "@/components/admin/ProjectList";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <p className="text-foreground/60">Manage your portfolio projects</p>
                </div>
                <ProjectForm />
            </div>

            <ProjectList projects={projects} />
        </div>
    );
}
