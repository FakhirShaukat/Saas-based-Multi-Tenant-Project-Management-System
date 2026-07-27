import { createInvitation } from "../services/invitationService.js";
import { acceptInvitation } from "../services/invitationService.js";
import User from "../models/User.js";


export const inviteMember = async(req,res)=>{

    try{


        const {
            email,
            role
        } = req.body;


        const invitation =
            await createInvitation({

                organizationId:
                    req.params.orgId,

                email,

                role

            });



        res.status(201).json({

            success:true,

            message:
            "Invitation created successfully",

            data:{

                inviteLink:
                `http://localhost:5173/invite/${invitation.token}`

            }

        });


    }catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

export const acceptInvite = async(req,res)=>{

    try{


        const membership =
            await acceptInvitation({

                token:req.params.token,

                userId:req.user._id,

                userEmail:req.user.email

            });



        res.status(200).json({

            success:true,

            message:
            "Invitation accepted successfully",

            data:membership

        });



    }catch(error){

        res.status(400).json({

            success:false,

            message:error.message

        });

    }

};