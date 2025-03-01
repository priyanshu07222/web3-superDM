import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendWhatsappMessage = async (to: string, message: string) => {
    try {
        await client.messages.create({
            from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
            body: message,
            to: `whatsapp:${to}`
        });
    } catch (error) {
        console.error(error);
    }
} 