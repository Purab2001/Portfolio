"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/admin";
import { cn } from "@/lib/utils";

export default function AdminLogin() {
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(formData) {
        const res = await login(formData);
        if (res.success) {
            router.push("/admin/dashboard");
        } else {
            setError(res.error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Admin Login</h2>
                    <p className="mt-2 text-sm text-foreground/60">
                        Enter your password to access the dashboard
                    </p>
                </div>

                <form action={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className={cn(
                                    "relative block w-full rounded-md border-0 py-1.5 text-foreground bg-secondary/50 ring-1 ring-inset ring-border",
                                    "placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3"
                                )}
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
