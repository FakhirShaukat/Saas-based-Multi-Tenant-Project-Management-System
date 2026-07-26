import { signupUser } from "../services/authService.js";
import { signupSchema } from "../validators/authValidator.js";
import { loginUser } from "../services/authService.js";
import { loginSchema } from "../validators/authValidator.js";


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