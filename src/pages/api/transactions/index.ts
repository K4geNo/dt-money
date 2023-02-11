import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import z from 'zod'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const createTransactionBodySchema = z.object({
        title: z.string(),
        amount: z.number(),
        type: z.enum(['income', 'outcome']),
        category: z.string(),
    })

    const { title, amount, category, type } = createTransactionBodySchema.parse(
        req.body
    )

    const transactionAlreadyExists = await prisma.transaction.findFirst({
        where: {
            title,
        },
    })

    if (transactionAlreadyExists) {
        return res.status(400).json({ error: 'Transaction already exists' })
    }

    const categoryAlreadyExists = await prisma.transaction.findFirst({
        where: {
            category,
        },
    })

    if (categoryAlreadyExists) {
        return res.status(400).json({ error: 'Category already exists' })
    }

    const transaction = await prisma.transaction.create({
        data: {
            title,
            amount,
            type,
            category,
        },
    })

    return res.status(201).json(transaction)
}
