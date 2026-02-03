"use client";

import { useState } from "react";
import { saveProject } from "@/actions/admin";
import { Plus, X, Trash2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const TABS = [
    { id: "general", label: "General" },
    { id: "details", label: "Details" },
    { id: "tech", label: "Tech Stack" },
    { id: "media", label: "Media" },
];

function DynamicListInput({ label, items, onChange, placeholder }) {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (!inputValue.trim()) return;
        onChange([...items, inputValue.trim()]);
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    const handleRemove = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">{label}</label>
            <div className="flex gap-2">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 rounded-md border bg-secondary/50 p-2 text-sm"
                    placeholder={placeholder || "Type and press Enter..."}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="bg-primary/10 text-primary px-3 rounded-md hover:bg-primary/20 transition-colors cursor-pointer"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-2 max-h-40 overflow-y-auto pr-1 scrollbar-hide">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 p-2 rounded-md bg-secondary/30 text-sm group">
                        <span className="break-all">{item}</span>
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="text-foreground/40 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                        >
                            <Trash2 className="w-3 h-3" />
                        </button>
                    </div>
                ))}
                {items.length === 0 && (
                    <p className="text-xs text-foreground/40 italic">No items added yet.</p>
                )}
            </div>
        </div>
    );
}

export function ProjectForm({ initialData = null, onClose }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("general");

    const isEditMode = !!initialData;

    // Initialize state
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        overview: initialData?.overview || "",
        demoUrl: initialData?.demoUrl || "",
        githubUrl: initialData?.githubUrl || "",
        features: initialData?.features || [],
        challenges: initialData?.challenges || [],
        futurePlans: initialData?.futurePlans || [],
        images: initialData?.images || [],
        techStacks: {
            frontend: initialData?.techStacks?.frontend || [],
            backend: initialData?.techStacks?.backend || [],
            tools: initialData?.techStacks?.tools || [],
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const project = {
                id: initialData?.id,
                ...formData
            };

            await saveProject(project);

            if (!isEditMode) {
                setIsOpen(false);
                // Reset form
                setFormData({
                    title: "", overview: "", demoUrl: "", githubUrl: "",
                    features: [], challenges: [], futurePlans: [], images: [],
                    techStacks: { frontend: [], backend: [], tools: [] }
                });
                setActiveTab("general");
            } else if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error(error);
            alert("Failed to save project");
        } finally {
            setLoading(false);
        }
    };

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const updateTechStack = (category, items) => {
        setFormData(prev => ({
            ...prev,
            techStacks: { ...prev.techStacks, [category]: items }
        }));
    };

    const content = (
        <>
            <ScrollbarStyles />
            <div className="bg-background rounded-lg w-full max-w-2xl border shadow-lg flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <Dialog.Title className="text-xl font-bold">{isEditMode ? "Edit Project" : "Add New Project"}</Dialog.Title>
                    <button
                        onClick={isEditMode ? onClose : () => setIsOpen(false)}
                        className="text-foreground/50 hover:text-foreground cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b px-6 bg-secondary/10 shrink-0">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer",
                                    activeTab === tab.id
                                        ? "border-primary text-primary"
                                        : "border-transparent text-foreground/60 hover:text-foreground hover:bg-secondary/20"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 overflow-y-auto flex-1 scrollbar-hide">

                        {/* GENERAL TAB */}
                        <div className={cn("space-y-4", activeTab !== "general" && "hidden")}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Title</label>
                                <input
                                    value={formData.title}
                                    onChange={(e) => updateField("title", e.target.value)}
                                    required
                                    className="w-full rounded-md border bg-secondary/50 p-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Overview</label>
                                <textarea
                                    value={formData.overview}
                                    onChange={(e) => updateField("overview", e.target.value)}
                                    required
                                    rows={4}
                                    className="w-full rounded-md border bg-secondary/50 p-2 resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Demo URL</label>
                                    <input
                                        value={formData.demoUrl}
                                        onChange={(e) => updateField("demoUrl", e.target.value)}
                                        className="w-full rounded-md border bg-secondary/50 p-2 text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">GitHub URL</label>
                                    <input
                                        value={formData.githubUrl}
                                        onChange={(e) => updateField("githubUrl", e.target.value)}
                                        className="w-full rounded-md border bg-secondary/50 p-2 text-sm"
                                        placeholder="https://github.com/..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* DETAILS TAB */}
                        <div className={cn("space-y-6", activeTab !== "details" && "hidden")}>
                            <DynamicListInput
                                label="Features"
                                items={formData.features}
                                onChange={(items) => updateField("features", items)}
                                placeholder="Add a key feature..."
                            />
                            <DynamicListInput
                                label="Challenges"
                                items={formData.challenges}
                                onChange={(items) => updateField("challenges", items)}
                                placeholder="Add a technical challenge..."
                            />
                            <DynamicListInput
                                label="Future Plans"
                                items={formData.futurePlans}
                                onChange={(items) => updateField("futurePlans", items)}
                                placeholder="Add a future improvement..."
                            />
                        </div>

                        {/* TECH STACK TAB */}
                        <div className={cn("space-y-6", activeTab !== "tech" && "hidden")}>
                            <DynamicListInput
                                label="Frontend"
                                items={formData.techStacks.frontend}
                                onChange={(items) => updateTechStack("frontend", items)}
                                placeholder="e.g. React, Tailwind..."
                            />
                            <DynamicListInput
                                label="Backend"
                                items={formData.techStacks.backend}
                                onChange={(items) => updateTechStack("backend", items)}
                                placeholder="e.g. Node.js, Express..."
                            />
                            <DynamicListInput
                                label="Tools"
                                items={formData.techStacks.tools}
                                onChange={(items) => updateTechStack("tools", items)}
                                placeholder="e.g. Git, Docker..."
                            />
                        </div>

                        {/* MEDIA TAB */}
                        <div className={cn("space-y-4", activeTab !== "media" && "hidden")}>
                            <DynamicListInput
                                label="Image URLs"
                                items={formData.images}
                                onChange={(items) => updateField("images", items)}
                                placeholder="/projects/image.png"
                            />
                            <div className="p-4 bg-blue-500/10 text-blue-500 text-xs rounded-lg">
                                <p>Tip: Add images to your public folder and reference them here, or use external URLs.</p>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t bg-secondary/5 shrink-0 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={isEditMode ? onClose : () => setIsOpen(false)}
                            className="px-4 py-2 rounded-md hover:bg-secondary transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? "Saving..." : "Save Project"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

    if (isEditMode) {
        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                {content}
            </div>
        );
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 cursor-pointer">
                    <Plus className="w-4 h-4" /> Add Project
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                <Dialog.Content
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-60 w-full max-w-2xl outline-none p-4"
                >
                    {content}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

function ScrollbarStyles() {
    return (
        <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `}</style>
    );
}