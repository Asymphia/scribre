"use server"

import { hash, verify } from "@node-rs/argon2"

const ARGON2_OPTIONS = {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
}

export const hashPassword = async (password: string): Promise<string> => {
    return hash(password, ARGON2_OPTIONS)
}

export const verifyPassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return verify(passwordHash, password, ARGON2_OPTIONS)
}