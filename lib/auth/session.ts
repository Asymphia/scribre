"use server"

import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding"
import { sha256 } from "@oslojs/crypto/sha2"
import prisma from "@/lib/prisma"
import type { User, Session } from "@/prisma/generated/client"
import { cache } from "react"
import { getSessionCookie } from "@/lib/auth/cookies"

export const generateSessionToken = async (): Promise<string> => {
    const bytes = new Uint8Array(20)
    crypto.getRandomValues(bytes)
    return encodeBase32LowerCaseNoPadding(bytes)
}

export const createSession = async (token: string, userId: number): Promise<Session> => {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)))

    return prisma.session.create({
        data: {
            id: sessionId,
            userId,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
        }
    })
}

export type SessionValidationResult = {
    session: Session
    user: Omit<User, "password">
} | {
    session: null
    user: null
}

export const validateSessionToken = async (token: string): Promise<SessionValidationResult> => {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)))

    const result = await prisma.session.findUnique({
        where: { id: sessionId },
        include: { user: true }
    })

    if(!result) {
        return { session: null, user: null }
    }

    const { user, ...session } = result

    if(Date.now() >= session.expiresAt.getTime()) {
        await prisma.session.delete({ where: { id: sessionId } })

        return { session: null, user: null }
    }

    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
        await prisma.session.update({
            where: { id: session.id },
            data: { expiresAt: session.expiresAt }
        })
    }

    const { password: _password, ...userWithoutPassword } = user

    return { session, user: userWithoutPassword }
}

export const invalidateSession = async (sessionId: string): Promise<void> => {
    await prisma.session.delete({ where: { id: sessionId } })
}

export const getCurrentSession = cache(async (): Promise<SessionValidationResult> => {
    const token = await getSessionCookie()

    if(!token) {
        return { session: null, user: null }
    }

    return validateSessionToken(token)
})