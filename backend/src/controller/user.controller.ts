import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()


export const userController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await prisma.user.create({
        data: {
            email,
            password
        }
    })

    res.json({ message: "User created successfully", id: user.id })
}

export const updateUserProfile = async (req: Request, res: Response) => {
    console.log(req.body, req.params, "hello from update user profile")

    const { name, id, telegramid, pubkey } = req.body

    const user = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            telegramid,
            solWalletPubkey: pubkey
        }
    })

    res.json({ message: "User updated successfully", id: user.id })
}

export const getUserProfile = async (req: Request, res: Response) => {
    console.log("jeelo")
    const id = req.body.id

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    res.json(user)
}