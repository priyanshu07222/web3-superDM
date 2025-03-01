"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.updateUserProfile = exports.userController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield prisma.user.create({
        data: {
            email,
            password
        }
    });
    res.json({ message: "User created successfully", id: user.id });
});
exports.userController = userController;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, req.params, "hello from update user profile");
    const { name, id, telegramid, pubkey } = req.body;
    const user = yield prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            telegramid,
            solWalletPubkey: pubkey
        }
    });
    res.json({ message: "User updated successfully", id: user.id });
});
exports.updateUserProfile = updateUserProfile;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("jeelo");
    const id = req.body.id;
    const user = yield prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(user);
});
exports.getUserProfile = getUserProfile;
