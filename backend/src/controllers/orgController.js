import { createOrgSchema } from "../validators/orgValidator.js";
import { createOrganization, getUserOrganizations } from "../services/orgService.js";


export const createOrg = async (req, res) => {

    try {

        const validatedData = createOrgSchema.parse(
            req.body
        );


        const organization = await createOrganization({
            name: validatedData.name,
            userId: req.user._id
        });


        res.status(201).json({
            success:true,
            message:"Organization created successfully",
            data:organization
        });


    } catch(error) {

        res.status(400).json({
            success:false,
            message:error.message
        });

    }

};


export const getOrganizations = async(req,res)=>{


    try{

        const organizations = await getUserOrganizations(
            req.user._id
        );


        res.status(200).json({
            success:true,
            data:organizations
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};