"use client";

import { useState } from "react";
import { saveSkill } from "@/actions/admin";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function SkillForm({ initialData = null, onClose }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // If initialData is provided, we assume we are in "Edit Mode" controlled by parent
    // If not, we are in "Add Mode" controlled by local dialog state
    const isEditMode = !!initialData;
    const showTrigger = !isEditMode;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.target);
            const skill = {
                id: initialData?.id, // Keep ID if editing
                name: formData.get("name"),
                level: parseInt(formData.get("level")),
                category: formData.get("category"),
                icon: formData.get("icon"),
            };

            await saveSkill(skill);

            if (!isEditMode) {
                setIsOpen(false);
                e.target.reset();
            } else if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error(error);
            alert("Failed to save skill");
        } finally {
            setLoading(false);
        }
    };

    const content = (
        <div className="bg-background p-6 rounded-lg w-full max-w-md border shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-bold">{isEditMode ? "Edit Skill" : "Add New Skill"}</Dialog.Title>
                {(isEditMode ? onClose : () => setIsOpen(false)) && (
                    <button
                        onClick={isEditMode ? onClose : () => setIsOpen(false)}
                        className="text-foreground/50 hover:text-foreground cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        name="name"
                        defaultValue={initialData?.name}
                        required
                        className="w-full rounded-md border bg-secondary/50 p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="category"
                        defaultValue={initialData?.category || "frontend"}
                        className="w-full rounded-md border bg-secondary/50 p-2"
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="tools">Tools</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Level (0-100)</label>
                    <input
                        name="level"
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={initialData?.level || 80}
                        required
                        className="w-full rounded-md border bg-secondary/50 p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Icon (String name or Path)</label>
                    <input
                        name="icon"
                        placeholder="e.g., /next.svg or SiReact"
                        defaultValue={initialData?.icon}
                        required
                        className="w-full rounded-md border bg-secondary/50 p-2"
                    />
                    <p className="text-xs text-foreground/50 mt-1">
                        Build-in icons: SiAxios, SiStripe, SiDocker. Or use /path/to/image.svg
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Saving..." : "Save Skill"}
                </button>
            </form>
        </div>
    );

    if (isEditMode) return content;

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 cursor-pointer">
                    <Plus className="w-4 h-4" /> Add Skill
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md outline-none">
                    {content}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
