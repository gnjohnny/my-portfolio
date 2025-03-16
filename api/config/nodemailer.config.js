import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '5johnndungu@gmail.com',
        pass: 'uwqs oliu llyz plcr',
    },
});
