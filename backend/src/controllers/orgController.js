import { createOrgSchema } from "../validators/orgValidator.js";
import { createOrganization } from "../services/orgService.js";


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