"use server"

import prisma from "@/lib/prisma"

const noteSelect = {
    id: true,
    folderId: true,
    title: true,
    description: true,
    content: true,
    isStarred: true,
    createdAt: true,
    updatedAt: true,
    tags: {
        select: { tag: { select: { tag: true } } }
    }
}

export type Note = {
    id: number
    folderId: number
    title: string
    description: string
    content: string
    isStarred: boolean
    createdAt: Date
    updatedAt: Date
    tags: string[]
}

const mapNote = (note: any): Note => ({
    id: note.id,
    folderId: note.folderId,
    title: note.title,
    description: note.description,
    content: note.content,
    isStarred: note.isStarred,
    createdAt: note.createdAt,
    updatedAt: note.updatedAt,
    tags: note.tags.map((t: any) => t.tag.tag)
})

export const getNotesFromFolder = async (folderId: number, userId: number): Promise<Note[]> => {
    const notes = await prisma.note.findMany({
        where: { folderId, userId },
        select: noteSelect,
        orderBy: { updatedAt: "desc" }
    })

    return notes.map(mapNote)
}

export const getAllNotes = async (userId: number): Promise<Note[]> => {
    const notes = await prisma.note.findMany({
        where: { userId },
        select: noteSelect,
        orderBy: { updatedAt: "desc" }
    })

    return notes.map(mapNote)
}

export const getNoteById = async (id: number, userId: number): Promise<Note | null> => {
    const note = await prisma.note.findFirst({
        where: { id, userId },
        select: noteSelect
    })

    return note ? mapNote(note) : null
}

export const createNote = async (userId: number, folderId: number, title: string, description: string, content: string, tagIds: number[]): Promise<Note> => {
    const note = await prisma.note.create({
        data: {
            userId,
            folderId,
            title,
            description,
            content,
            isStarred: false,
            tags: { create: tagIds.map(tagId => ({ tagId })) }
        },
        select: noteSelect
    })

    return mapNote(note)
}

export const updateNote = async (id: number, userId: number, folderId: number, title: string, description: string, content: string, tagIds: number[]): Promise<Note | null> => {
    const existing = await prisma.note.findFirst({ where: { id, userId } })
    if (!existing) {
        return null
    }

    await prisma.$transaction([
        prisma.noteTag.deleteMany({ where: { noteId: id } }),
        prisma.note.update({
            where: { id },
            data: { folderId, title, description, content, tags: { create: tagIds.map(tagId => ({ tagId })) } }
        })
    ])

    return getNoteById(id, userId)
}

export const toggleNoteStar = async (id: number, userId: number): Promise<Note | null> => {
    const note = await prisma.note.findFirst({ where: { id, userId } })
    if (!note) {
        return null
    }

    const updated = await prisma.note.update({
        where: { id },
        data: { isStarred: !note.isStarred },
        select: noteSelect
    })

    return mapNote(updated)
}

export const deleteNote = async (id: number, userId: number): Promise<boolean> => {
    const result = await prisma.note.deleteMany({ where: { id, userId } })
    return result.count > 0
}