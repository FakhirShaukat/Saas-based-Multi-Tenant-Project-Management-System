import {
    signupUser,
    loginUser,
    forgotPassword,
    resetPassword
} from "../services/authService.js";

import {
    signupSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema
} from "../validators/authValidator.js";

export const signup = async(req,res)=>{

    try{

        const validatedData = signupSchema.parse(req.body);

        const result = await signupUser(validatedData);


        res.cookie(
            "token",
            result.token,
            {
                httpOnly:true,
                secure:false,
                sameSite:"lax",
                maxAge:7 * 24 * 60 * 60 * 1000
            }
        );


        res.status(201).json({
            success:true,
            message:"User created successfully",
            data:{
                user:result.user
            }
        });


    }catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }

};

export const login = async(req,res)=>{

    try{

        const validatedData = loginSchema.parse(req.body);


        const result = await loginUser(
            validatedData
        );


        res.cookie(
            "token",
            result.token,
            {
                httpOnly:true,
                secure:false,
                sameSite:"lax",
                maxAge:7 * 24 * 60 * 60 * 1000
            }
        );


        res.status(200).json({
            success:true,
            message:"Login successful",
            data:{
                user:result.user
            }
        });


    }catch(error){

        res.status(401).json({
            success:false,
            message:error.message
        });

    }

};

export const forgotPasswordController = async (req, res) => {

    try {

        const validatedData =
            forgotPasswordSchema.parse(req.body);

        await forgotPassword(validatedData);

        res.status(200).json({

            success: true,

            message:
                "If an account with that email exists, a password reset link has been sent."

        });

    } catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const resetPasswordController = async (req, res) => {

    try {

        const validatedData =
            resetPasswordSchema.parse(req.body);

        await resetPassword({

            token: req.params.token,

            password: validatedData.password

        });

        res.status(200).json({

            success: true,

            message:
                "Password reset successfully"

        });

    } catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const logout = async(req,res)=>{

    res.clearCookie("token");

    res.status(200).json({
        success:true,
        message:"Logged out successfully"
    });

};

export const getMe = async(req,res)=>{

    res.status(200).json({
        success:true,
        data:{
            id:req.user._id,
            name:req.user.name,
            email:req.user.email
        }
    });

};