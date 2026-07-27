import { getOrganizationMembers } from "../services/memberService.js";
import { updateMemberRole } from "../services/memberService.js";
import { removeMember as removeMemberService } from "../services/memberService.js";
import { updateMemberRoleSchema } from "../validators/memberValidator.js";


export const getMembers = async (req, res) => {

    try {

        const members = await getOrganizationMembers(
            req.params.orgId
        );

        res.status(200).json({
            success: true,
            data: members
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



export const updateRole = async(req,res)=>{

    try{

        const validatedData =
            updateMemberRoleSchema.parse(
                req.body
            );


        const member =
            await updateMemberRole({

                organizationId:
                    req.params.orgId,

                userId:
                    req.params.userId,

                role:
                    validatedData.role

            });


        res.status(200).json({

            success:true,

            message:"Member role updated successfully",

            data:member

        });


    }catch(error){

        res.status(400).json({

            success:false,

            message:error.message

        });

    }

};



export const removeMember = async(req,res)=>{

    try{


        await removeMemberService({

            organizationId:
                req.params.orgId,

            userId:
                req.params.userId

        });



        res.status(200).json({

            success:true,

            message:"Member removed successfully"

        });



    }catch(error){

        res.status(400).json({

            success:false,

            message:error.message

        });

    }

};