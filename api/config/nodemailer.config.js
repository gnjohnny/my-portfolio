import nodemailer from 'nodemailer';
import "dotenv/config"

export const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.TO_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    },
});
