"use server"

import prisma from "@/lib/prisma"

export const getOrCreateTagIds = async (tagNames: string[]): Promise<number[]> => {
    const normalized = [...new Set(tagNames.map(t => t.trim()).filter(Boolean))]

    if (normalized.length === 0) {
        return []
    }

    await prisma.tag.createMany({
        data: normalized.map(tag => ({ tag })),
        skipDuplicates: true
    })

    const tags = await prisma.tag.findMany({
        where: { tag: { in: normalized } },
        select: { id: true }
    })

    return tags.map(t => t.id)
}