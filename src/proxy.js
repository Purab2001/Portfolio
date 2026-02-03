import { NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function proxy(req) {
    // 1. Check if route is protected
    const path = req.nextUrl.pathname;
    if (!path.startsWith("/admin/dashboard")) {
        return NextResponse.next();
    }

    // 2. Check for cookie
    const cookie = req.cookies.get("admin_auth");
    const token = cookie?.value;

    // 3. Verify session
    const session = token ? await verifySession(token) : null;

    // 4. Redirect if invalid
    if (!session) {
        return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }

    // 5. Allow if valid
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
