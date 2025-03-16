import { transport } from '../config/nodemailer.config.js';

export const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await transport.sendMail({
            from: name,
            to: process.env.TO_EMAIL,
            subject: `${name}`,
            text: `${message} from ${email}`,
        });

        return res.status(200).json({
            success: true,
            msg: `message sent successfully`,
        });
    } catch (error) {
        console.log('Error in send email controller:', error.message);
        return res.status(500).json({
            success: false,
            msg: 'Internal server error',
        });
    }
};
