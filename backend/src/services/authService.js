import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/utilityToken.js";
import crypto from "crypto";
import { generateResetToken } from "../utils/generateUtilityToken.js";
import { sendResetPasswordEmail } from "./emailService.js";


export const signupUser = async ({ name, email, password }) => {

    const existingUser = await User.findOne({
        email
    });


    if(existingUser){
        throw new Error("Email already registered");
    }


    const hashedPassword = await bcrypt.hash(
        password,
        12
    );


    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });


    const token = generateToken(user._id);


    return {
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        },
        token
    };
};

export const loginUser = async ({ email, password }) => {

    const user = await User.findOne({
        email
    }).select("+password");


    if(!user){
        throw new Error("Invalid email or password");
    }


    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );


    if(!isPasswordCorrect){
        throw new Error("Invalid email or password");
    }


    const token = generateToken(user._id);


    return {
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        },
        token
    };
};

export const forgotPassword = async ({ email }) => {

    const user = await User.findOne({ email });

    // Prevent email enumeration
    if (!user) {
        return;
    }

    const {
        resetToken,
        hashedToken
    } = generateResetToken();

    user.passwordResetToken = hashedToken;

    user.passwordResetExpires =
        Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink =
        `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendResetPasswordEmail(
        user.email,
        resetLink
    );

};

export const resetPassword = async ({
    token,
    password
}) => {

    const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");


    const user = await User.findOne({

        passwordResetToken: hashedToken,

        passwordResetExpires: {
            $gt: Date.now()
        }

    });


    if (!user) {

        throw new Error(
            "Invalid or expired reset token"
        );

    }


    user.password = await bcrypt.hash(
        password,
        12
    );


    user.passwordResetToken = null;

    user.passwordResetExpires = null;


    await user.save();

};