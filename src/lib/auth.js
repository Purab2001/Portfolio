import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.ADMIN_PASSWORD || "fallback-secret-key-do-not-use-in-production";
const key = new TextEncoder().encode(secretKey);

export async function signSession(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1w") // 1 week
        .sign(key);
}

export async function verifySession(token) {
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        return null;
    }
}
