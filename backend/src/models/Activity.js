import mongoose from "mongoose";


const activitySchema = new mongoose.Schema(
{

    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization",
        required:true
    },


    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    action:{
        type:String,
        required:true
    },


    entityType:{
        type:String,
        required:true
    },


    entityId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },


    description:{
        type:String,
        required:true
    }


},
{
    timestamps:true
});


export default mongoose.model(
    "Activity",
    activitySchema
);