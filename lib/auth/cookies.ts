"use server"

import { cookies } from "next/headers"

const SESSION_COOKIE_NAME = "session"

export const setSessionCookie = async (token: string, expiresAt: Date): Promise<void> => {
    const cookieStore = await cookies()

    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        path: "/"
    })
}

export const deleteSessionTokenCookie = async (): Promise<void> => {
    const cookieStore = await cookies()

    cookieStore.set(SESSION_COOKIE_NAME, "", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/",
    })
}

export const getSessionCookie = async (): Promise<string | undefined> => {
    const cookieStore = await cookies()
    return cookieStore.get(SESSION_COOKIE_NAME)?.value
}