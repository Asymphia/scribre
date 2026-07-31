"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getCurrentSession } from "@/lib/auth/session"
import { getOrCreateTagIds } from "@/lib/dashboard/tags"
import {
    createNote as createNoteInDb,
    updateNote as updateNoteInDb,
    toggleNoteStar as toggleNoteStarInDb,
    deleteNote as deleteNoteInDb
} from "@/lib/dashboard/notes"
import { getFolderById } from "@/lib/dashboard/folders"

export type NoteFormState = { errors?: Record<string, string[]>, message?: string, success?: boolean } | undefined

const noteSchema = z.object({
    folderId: z.coerce.number().int().positive("Select a folder"),
    title: z.string().min(1, "Enter a title").max(150, "Title is too long"),
    description: z.string().max(500, "Description is too long").default(""),
    content: z.string().default(""),
    tags: z.string().optional()
})

const parseTagsInput = (raw: FormDataEntryValue | null): string[] => {
    if (!raw || typeof raw !== "string") {
        return []
    }

    return raw.split(",").map(t => t.trim()).filter(Boolean)
}

export const createNote = async (_prevState: NoteFormState, formData: FormData): Promise<NoteFormState> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const parsed = noteSchema.safeParse({
        folderId: formData.get("folderId"),
        title: formData.get("title"),
        description: formData.get("description"),
        content: formData.get("content"),
        tags: formData.get("tags")
    })

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { folderId, title, description, content, tags } = parsed.data

    const folder = await getFolderById(folderId, user.id)
    if (!folder) {
        return { errors: { folderId: ["Folder not found"] } }
    }

    const tagIds = await getOrCreateTagIds(parseTagsInput(tags ?? null))

    const note = await createNoteInDb(user.id, folderId, title, description, content, tagIds)

    revalidatePath(`/notes/${note.id}`)

    return { success: true, message: String(note.id) }
}

export const updateNote = async (id: number, _prevState: NoteFormState, formData: FormData): Promise<NoteFormState> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    const parsed = noteSchema.safeParse({
        folderId: formData.get("folderId"),
        title: formData.get("title"),
        description: formData.get("description"),
        content: formData.get("content"),
        tags: formData.get("tags")
    })

    if (!parsed.success) {
        return { errors: parsed.error.flatten().fieldErrors }
    }

    const { folderId, title, description, content, tags } = parsed.data
    const tagIds = await getOrCreateTagIds(parseTagsInput(tags ?? null))

    const note = await updateNoteInDb(id, user.id, folderId, title, description, content, tagIds)

    if (!note) {
        return { message: "Note not found" }
    }

    revalidatePath(`/notes/${id}`)

    return { success: true }
}

export const toggleNoteStar = async (id: number): Promise<void> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    await toggleNoteStarInDb(id, user.id)

    revalidatePath(`/notes/${id}`)
}

export const deleteNote = async (id: number): Promise<void> => {
    const { user } = await getCurrentSession()

    if (!user) {
        redirect("/login")
    }

    await deleteNoteInDb(id, user.id)

    revalidatePath("/dashboard")
}