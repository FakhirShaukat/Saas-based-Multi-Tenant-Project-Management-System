import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

    host: process.env.EMAIL_HOST,

    port: process.env.EMAIL_PORT,

    secure: false,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    }

});


export const sendResetPasswordEmail = async (email, resetLink) => {

    await transporter.sendMail({

        from: `"TeamDesk" <${process.env.EMAIL_USER}>`,

        to: email,

        subject: "Reset Your TeamDesk Password",

        html: `
            <h2>Reset Password</h2>

            <p>You requested a password reset.</p>

            <p>
                <a href="${resetLink}">
                    Reset Password
                </a>
            </p>

            <p>This link expires in 15 minutes.</p>

            <p>If you didn't request this, ignore this email.</p>
        `

    });

};