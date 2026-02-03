import { redirect } from "next/navigation";
import { isAuthenticated } from "@/actions/admin";
import Link from "next/link";
import { Code, FolderGit } from "lucide-react";

export default async function AdminDashboard() {
    const isAuth = await isAuthenticated();
    if (!isAuth) {
        redirect("/admin");
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                <p className="text-foreground/60">Welcome back to your portfolio management center.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/admin/dashboard/skills"
                    className="group block p-6 rounded-2xl border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Code className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-foreground/50">Manage</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Skills</h3>
                    <p className="text-foreground/60">Add, edit, or remove technical skills from your portfolio.</p>
                </Link>

                <Link
                    href="/admin/dashboard/projects"
                    className="group block p-6 rounded-2xl border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <FolderGit className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-foreground/50">Manage</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Projects</h3>
                    <p className="text-foreground/60">Update project details, images, and feature lists.</p>
                </Link>
            </div>
        </div>
    );
}
