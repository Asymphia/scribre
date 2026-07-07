"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { hashPassword, verifyPassword } from "@/lib/auth/password"
import { createSession, generateSessionToken, invalidateSession, validateSessionToken } from "@/lib/auth/session"
import { deleteSessionTokenCookie, getSessionCookie, setSessionCookie } from "@/lib/auth/cookies"

export type AuthFormState = { errors?: Record<string, string[]>, message?: string, success?: boolean } | undefined

const signUpSchema = z.object({
    name: z.string().min(1, "Enter your name").max(50, "Name is too long"),
    surname: z.string().min(1, "Enter your surname").max(50, "Surname is too long"),
    email: z.string().email("Enter valid e-mail"),
    password: z.string().min(8, "Password must be at least 8 characters long").regex( /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~]/, "Password must contain at least one special character"),
    repeatPassword: z.string()
}).refine(data => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"]
})

export const signUp = async (_prevState: AuthFormState, formData: FormData): Promise<AuthFormState> => {
    const parsed = signUpSchema.safeParse({
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        password: formData.get("password"),
        repeatPassword: formData.get("repeat-password"),
    })

    if(!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { name, surname, email, password } = parsed.data

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        return { errors: { email: ["Account already exist"] } }
    }

    const passwordHash = await hashPassword(password)

    const user = await prisma.user.create({
        data: {
            name,
            surname,
            email,
            password: passwordHash,
            emailVerified: true
        }
    })

    return { success: true }
}

const signInSchema = z.object({
    email: z.string().email("Enter valid e-mail"),
    password: z.string().min(1, "Enter password"),
})

export const signIn = async (_prevState: AuthFormState, formData: FormData): Promise<AuthFormState> => {
    const parsed = signInSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { email, password } = parsed.data

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
        return { message: "Invalid e-mail or password" }
    }

    const validPassword = await verifyPassword(password, user.password)
    if (!validPassword) {
        return { message: "Invalid e-mail or password" }
    }

    const token = await generateSessionToken()
    const session = await createSession(token, user.id)
    await setSessionCookie(token, session.expiresAt)

    redirect("/dashboard")
}

export const signOut = async (): Promise<void> => {
    const token = await getSessionCookie()

    if (token) {
        const { session } = await validateSessionToken(token)

        if (session) {
            await invalidateSession(session.id)
        }
    }

    await deleteSessionTokenCookie()
    redirect("/login")
}