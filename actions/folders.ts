"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getCurrentSession } from "@/lib/auth/session"
import { getOrCreateTagIds } from "@/lib/dashboard/tags"
import {
    createFolder as createFolderInDb,
    updateFolder as updateFolderInDb,
    toggleFolderStar as toggleFolderStarInDb,
    deleteFolder as deleteFolderInDb
} from "@/lib/dashboard/folders"

export type FolderFormState = { errors?: Record<string, string[]>, message?: string, success?: boolean } | undefined

const folderSchema = z.object({
    title: z.string().min(1, "Enter a title").max(120, "Title is too long"),
    description: z.string().max(500, "Description is too long").default(""),
    iconUrl: z.string().max(500).default(""),
    tags: z.string().optional()
})

const parseTagsInput = (raw: FormDataEntryValue | null): string[] => {
    if (!raw || typeof raw !== "string") {
        return []
    }

    return raw.split(",").map(t => t.trim()).filter(Boolean)
}

export const createFolder = async (_prevState: FolderFormState, formData: FormData): Promise<FolderFormState> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const parsed = folderSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        iconUrl: formData.get("iconUrl"),
        tags: formData.get("tags")
    })

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { title, description, iconUrl, tags } = parsed.data
    const tagIds = await getOrCreateTagIds(parseTagsInput(tags ?? null))

    const folder = await createFolderInDb(user.id, title, description, iconUrl, tagIds)

    revalidatePath("/dashboard")

    return { success: true, message: String(folder.id) }
}

export const updateFolder = async (id: number, _prevState: FolderFormState, formData: FormData): Promise<FolderFormState> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const parsed = folderSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        iconUrl: formData.get("iconUrl"),
        tags: formData.get("tags")
    })

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { title, description, iconUrl, tags } = parsed.data
    const tagIds = await getOrCreateTagIds(parseTagsInput(tags ?? null))

    const folder = await updateFolderInDb(id, user.id, title, description, iconUrl, tagIds)

    if (!folder) {
        return { message: "Folder not found" }
    }

    revalidatePath("/dashboard")

    return { success: true }
}

export const toggleFolderStar = async (id: number): Promise<void> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    await toggleFolderStarInDb(id, user.id)

    revalidatePath("/dashboard")
}

export const deleteFolder = async (id: number): Promise<void> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    await deleteFolderInDb(id, user.id)

    revalidatePath("/dashboard")
}