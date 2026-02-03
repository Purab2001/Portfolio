"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { signSession, verifySession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "admin_auth";

// --- Authentication ---

export async function login(formData) {
    const password = formData.get("password");

    // Simple environment variable check
    if (password === process.env.ADMIN_PASSWORD) {
        const token = await signSession({ role: "admin" });
        const cookieStore = await cookies();
        cookieStore.set(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });
        return { success: true };
    }

    return { success: false, error: "Invalid password" };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    return { success: true };
}

export async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return false;

    const session = await verifySession(token);
    return !!session;
}

// --- Skills CRUD ---

export async function getSkills() {
    return await prisma.skill.findMany({
        orderBy: { createdAt: 'asc' }
    });
}

export async function saveSkill(skill) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    // Prepare data for Prisma
    const skillData = {
        name: skill.name,
        category: skill.category,
        level: parseInt(skill.level, 10), // Ensure level is an integer
        icon: skill.icon,
        description: skill.description || null,
    };

    if (skill.id) {
        // Update existing matching ID
        await prisma.skill.update({
            where: { id: skill.id },
            data: skillData
        });
    } else {
        // Create new
        await prisma.skill.create({
            data: {
                ...skillData,
                id: skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
            }
        });
    }

    revalidatePath("/"); // Update home page
    revalidatePath("/admin/skills");
    return { success: true };
}

export async function deleteSkill(id) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    await prisma.skill.delete({
        where: { id }
    });

    revalidatePath("/");
    revalidatePath("/admin/skills");
    return { success: true };
}

// --- Projects CRUD ---

export async function getProjects() {
    return await prisma.project.findMany({
        orderBy: { createdAt: 'asc' }
    });
}

export async function saveProject(project) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    // Prepare data for Prisma
    const projectData = {
        title: project.title,
        images: project.images || [],
        overview: project.overview,
        features: project.features || [],
        techStacks: project.techStacks, // JSON object
        challenges: project.challenges || [],
        futurePlans: project.futurePlans || [],
        demoUrl: project.demoUrl || null,
        githubUrl: project.githubUrl || null,
    };

    if (project.id) {
        // Check if project exists
        const existing = await prisma.project.findUnique({
            where: { id: project.id }
        });

        if (existing) {
            // Update existing
            await prisma.project.update({
                where: { id: project.id },
                data: projectData
            });
        } else {
            // Create new with provided ID
            await prisma.project.create({
                data: {
                    ...projectData,
                    id: project.id,
                }
            });
        }
    } else {
        // Create new
        await prisma.project.create({
            data: {
                ...projectData,
                id: project.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
            }
        });
    }

    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true };
}

export async function deleteProject(id) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    await prisma.project.delete({
        where: { id }
    });

    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true };
}
