"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/actions/admin";
import { LayoutDashboard, Code, FolderGit, LogOut, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        await logout();
        router.push("/admin");
    }

    const navItems = [
        { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
        { href: "/admin/dashboard/skills", label: "Skills", icon: Code },
        { href: "/admin/dashboard/projects", label: "Projects", icon: FolderGit },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/admin/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="Admin Panel"
                            width={40}
                            height={40}
                            className="w-10 h-auto"
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="p-2 hover:bg-secondary rounded-full text-foreground/70 hover:text-foreground transition-colors"
                            title="Go to Website"
                        >
                            <Home className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="p-2 hover:bg-red-500/10 rounded-full text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 shrink-0">
                    <nav className="space-y-2 sticky top-24">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                    pathname === item.href
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-secondary/50"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 w-full min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
