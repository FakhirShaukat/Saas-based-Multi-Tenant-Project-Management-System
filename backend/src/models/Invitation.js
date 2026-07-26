import mongoose from "mongoose";


const invitationSchema = new mongoose.Schema(
{
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization",
        required:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },

    role:{
        type:String,
        enum:[
            "admin",
            "member"
        ],
        default:"member"
    },

    token:{
        type:String,
        required:true,
        unique:true
    },

    status:{
        type:String,
        enum:[
            "pending",
            "accepted",
            "expired"
        ],
        default:"pending"
    },

    expiresAt:{
        type:Date,
        required:true
    }

},
{
    timestamps:true
});


export default mongoose.model(
    "Invitation",
    invitationSchema
);