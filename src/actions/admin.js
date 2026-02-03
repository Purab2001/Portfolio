"use server";

import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { signSession, verifySession } from "@/lib/auth";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const SKILLS_FILE = path.join(DATA_DIR, "skills.json");
const PROJECTS_FILE = path.join(DATA_DIR, "project.json");
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

// --- Helper Functions ---

async function readJson(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") return [];
        throw error;
    }
}

async function writeJson(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// --- Skills CRUD ---

export async function getSkills() {
    return await readJson(SKILLS_FILE);
}

export async function saveSkill(skill) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    const skills = await getSkills();

    if (skill.id) {
        // Update existing
        const index = skills.findIndex((s) => s.id === skill.id);
        if (index !== -1) {
            skills[index] = { ...skills[index], ...skill };
        } else {
            // ID provided but not found? Treat as new or error. treating as new for now but safer to push.
            skills.push(skill);
        }
    } else {
        // Create new
        const newSkill = {
            ...skill,
            id: skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        };
        skills.push(newSkill);
    }

    await writeJson(SKILLS_FILE, skills);
    revalidatePath("/"); // Update home page
    revalidatePath("/admin/skills");
    return { success: true };
}

export async function deleteSkill(id) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    const skills = await getSkills();
    const filtered = skills.filter((s) => s.id !== id);

    await writeJson(SKILLS_FILE, filtered);
    revalidatePath("/");
    revalidatePath("/admin/skills");
    return { success: true };
}

// --- Projects CRUD ---

export async function getProjects() {
    return await readJson(PROJECTS_FILE);
}

export async function saveProject(project) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    const projects = await getProjects();

    if (project.id && projects.some(p => p.id === project.id)) {
        // Update existing
        const index = projects.findIndex((p) => p.id === project.id);
        if (index !== -1) {
            projects[index] = { ...projects[index], ...project };
        }
    } else {
        // Create new
        const newProject = {
            ...project,
            id: project.id || project.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        };
        // Ensure arrays are initialized if missing (though form should handle this)
        newProject.images = newProject.images || [];
        newProject.features = newProject.features || [];
        newProject.challenges = newProject.challenges || [];
        newProject.futurePlans = newProject.futurePlans || [];

        projects.push(newProject);
    }

    await writeJson(PROJECTS_FILE, projects);
    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true };
}

export async function deleteProject(id) {
    const isAuth = await isAuthenticated();
    if (!isAuth) throw new Error("Unauthorized");

    const projects = await getProjects();
    const filtered = projects.filter((p) => p.id !== id);

    await writeJson(PROJECTS_FILE, filtered);
    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true };
}
