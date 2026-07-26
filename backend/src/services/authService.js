import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/utilityToken.js";


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