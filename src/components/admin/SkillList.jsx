"use client";

import { useState } from "react";
import { deleteSkill } from "@/actions/admin";
import { SkillForm } from "./SkillForm";
import { SkillIcon } from "@/components/SkillIcon";
import { Trash2, Pencil } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function SkillList({ skills }) {
    const [editingSkill, setEditingSkill] = useState(null);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this skill?")) {
            await deleteSkill(id);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
                <div key={skill.id} className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center">
                            <SkillIcon icon={skill.icon} name={skill.name} className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold">{skill.name}</div>
                            <div className="text-xs text-foreground/60">
                                {skill.category} • {skill.level}%
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => setEditingSkill(skill)}
                            className="p-2 hover:bg-secondary rounded-full text-blue-500 cursor-pointer"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleDelete(skill.id)}
                            className="p-2 hover:bg-secondary rounded-full text-red-500 cursor-pointer"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}

            {/* Edit Dialog */}
            {editingSkill && (
                <Dialog.Root open={!!editingSkill} onOpenChange={(open) => !open && setEditingSkill(null)}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md outline-none z-50">
                            <SkillForm
                                initialData={editingSkill}
                                onClose={() => setEditingSkill(null)}
                            />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </div>
    );
}
