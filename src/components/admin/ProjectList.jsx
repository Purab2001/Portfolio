"use client";

import { useState } from "react";
import { deleteProject } from "@/actions/admin";
import { useToast } from "@/hooks/use-toast";
import { ProjectForm } from "./ProjectForm";
import { Trash2, Pencil } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

export function ProjectList({ projects }) {
    const [editingProject, setEditingProject] = useState(null);
    const { toast } = useToast();

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this project?")) {
            try {
                await deleteProject(id);
                toast({
                    title: "Success",
                    description: "Project deleted successfully",
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: "Error",
                    description: "Failed to delete project",
                    variant: "destructive",
                });
            }
        }
    };

    return (
        <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="p-6 border rounded-lg bg-card hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-6 group cursor-pointer">
                    <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden bg-secondary/50 shrink-0">
                        {project.images?.[0] ? (
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-foreground/20">No Image</div>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setEditingProject(project)}
                                    className="p-2 hover:bg-secondary rounded-full text-blue-500 cursor-pointer"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="p-2 hover:bg-secondary rounded-full text-red-500 cursor-pointer"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{project.overview}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStacks?.frontend?.slice(0, 3).map(tech => (
                                <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                            {(project.techStacks?.frontend?.length > 3) && (
                                <span className="text-xs text-foreground/50 px-2 py-1">+{project.techStacks.frontend.length - 3} more</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Edit Dialog */}
            {editingProject && (
                <Dialog.Root open={!!editingProject} onOpenChange={(open) => !open && setEditingProject(null)}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl outline-none z-[60]">
                            <ProjectForm
                                initialData={editingProject}
                                onClose={() => setEditingProject(null)}
                            />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </div>
    );
}
