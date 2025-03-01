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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: "hgl rgs orty eds mmc",
    },
});
function sendMail() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);
        // send mail with defined transport object
        try {
            const info = yield transporter.sendMail({
                from: '"Testing mail from my server to you Sir 👻" <priyanshu16181389@gmail.com>', // sender address
                to: "himanshutiwari9953159526@gmail.com", // list of receivers
                subject: "Lottery from web3 SuperDm", // Subject line
                text: "you have won a lottery of $10,000, claim your rewards as soon as possible", // plain text body
                html: "<b>Hello world?</b>", // html body
            });
            console.log("Message sent: %s", info.messageId);
        }
        catch (error) {
            console.error(error);
        }
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    });
}
