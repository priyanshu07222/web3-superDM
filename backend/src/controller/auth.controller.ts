import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const registerController = async (req: Request, res: Response) => {
    const { email, password } = req.body();

    if (!email || !password) {
        res.json({ success: false, message: "Email and password required" })
        return;
    }

    let isEmailExist;
    try {
        isEmailExist = await prisma.user.findFirst(email);
        res.json({
            message: "User Already exist with this email",
            success: false

        })
        return;
    } catch (error: any) {
        res.json({
            message: error.message,
            success: false
        })
        return;
    }

    // hash the password

    if (!isEmailExist) {
        try {
            const user = await prisma.user.create({
                data: {
                    email: email,
                    password: password
                }
            })

            res.json({
                success: true,
                message: "Registered Successfully"
            })
        } catch (error: any) {
            res.json({
                message: error.message,
                success: false
            })
            return;
        }


    }
}


export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json({ success: false, message: "Email and password required" })
        return;
    }

    try {
        const user = await prisma.user.findFirst(email);
        if (!user) {
            res.json({
                success: false,
                message: "No user exist with this email"
            })
            return;
        }

        if (password == user.password) {
            res.json({
                success: true,
                message: "Logged In",
                user: { email: user.email, }
            })
        }
    } catch (error: any) {
        res.json({
            success: false,
            message: error.message
        })
        return;
    }
}