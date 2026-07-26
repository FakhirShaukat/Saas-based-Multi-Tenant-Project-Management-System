import Membership from "../models/Membership.js";


export const checkOrgMembership = async (req, res, next) => {

    try {

        const { orgId } = req.params;


        const membership = await Membership.findOne({
            user: req.user._id,
            organization: orgId
        });


        if(!membership){

            return res.status(403).json({
                success:false,
                message:"You are not a member of this organization"
            });

        }


        req.membership = membership;


        next();


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};