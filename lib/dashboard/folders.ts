"use server"

import prisma from "@/lib/prisma"
import { getCurrentSession } from "@/lib/auth/session"

const folderSelect = {
    id: true,
    title: true,
    description: true,
    iconUrl: true,
    isStarred: true,
    createdAt: true,
    updatedAt: true,
    tags: {
        select: { tag: { select: { tag: true } } }
    }
}

type FolderRecord = {
    id: number
    title: string
    description: string
    iconUrl: string
    isStarred: boolean
    createdAt: Date
    updatedAt: Date
    tags: { tag: { tag: string } }[]
}

export type Folder = {
    id: number
    title: string
    description: string
    iconUrl: string
    isStarred: boolean
    createdAt: Date
    updatedAt: Date
    tags: string[]
}

const mapFolder = (folder: FolderRecord): Folder => ({
    id: folder.id,
    title: folder.title,
    description: folder.description,
    iconUrl: folder.iconUrl,
    isStarred: folder.isStarred,
    createdAt: folder.createdAt,
    updatedAt: folder.updatedAt,
    tags: folder.tags.map(t => t.tag.tag)
})

export const getFoldersByUser = async (userId: number): Promise<Folder[]> => {
    const folders = await prisma.folder.findMany({
        where: { userId },
        select: folderSelect,
        orderBy: { updatedAt: "desc" }
    })

    return folders.map(mapFolder)
}

export const getFoldersForCurrentUser = async (): Promise<Folder[]> => {
    const { user } = await getCurrentSession()

    if (!user) {
        return []
    }

    return getFoldersByUser(user.id)
}

export const getFolderById = async (id: number, userId: number): Promise<Folder | null> => {
    const folder = await prisma.folder.findFirst({
        where: { id, userId },
        select: folderSelect
    })

    return folder ? mapFolder(folder) : null
}

export const createFolder = async (userId: number, title: string, description: string, iconUrl: string, tagIds: number[]): Promise<Folder> => {
    const folder = await prisma.folder.create({
        data: {
            userId,
            title,
            description,
            iconUrl,
            isStarred: false,
            tags: { create: tagIds.map(tagId => ({ tagId })) }
        },
        select: folderSelect
    })

    return mapFolder(folder)
}

export const updateFolder = async (id: number, userId: number, title: string, description: string, iconUrl: string, tagIds: number[]): Promise<Folder | null> => {
    const existing = await prisma.folder.findFirst({ where: { id, userId } })
    if (!existing) {
        return null
    }

    await prisma.$transaction([
        prisma.folderTag.deleteMany({ where: { folderId: id } }),
        prisma.folder.update({
            where: { id },
            data: { title, description, iconUrl, tags: { create: tagIds.map(tagId => ({ tagId })) } }
        })
    ])

    return getFolderById(id, userId)
}

export const toggleFolderStar = async (id: number, userId: number): Promise<Folder | null> => {
    const folder = await prisma.folder.findFirst({ where: { id, userId } })
    if (!folder) {
        return null
    }

    const updated = await prisma.folder.update({
        where: { id },
        data: { isStarred: !folder.isStarred },
        select: folderSelect
    })

    return mapFolder(updated)
}

export const deleteFolder = async (id: number, userId: number): Promise<boolean> => {
    const result = await prisma.folder.deleteMany({ where: { id, userId } })
    return result.count > 0
}