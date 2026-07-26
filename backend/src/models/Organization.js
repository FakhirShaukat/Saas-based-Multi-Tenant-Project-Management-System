import mongoose from "mongoose";


const organizationSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },


    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    plan:{
        type:String,
        enum:[
            "free",
            "pro"
        ],
        default:"free"
    },


    stripeCustomerId:{
        type:String,
        default:null
    },


    stripeSubscriptionId:{
        type:String,
        default:null
    },


    subscriptionStatus:{
        type:String,
        default:"inactive"
    }

},
{
    timestamps:true
});


const Organization = mongoose.model(
    "Organization",
    organizationSchema
);


export default Organization;