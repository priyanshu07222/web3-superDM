import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function sendMail() {
    console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD)
    // send mail with defined transport object
    try {
        const info = await transporter.sendMail({
            from: '"Testing mail from my server to you Sir 👻" <priyanshu16181389@gmail.com>', // sender address
            to: "himanshutiwari9953159526@gmail.com", // list of receivers
            subject: "Lottery from web3 SuperDm", // Subject line
            text: "you have won a lottery of $10,000, claim your rewards as soon as possible", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error(error);

    }
}