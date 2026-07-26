import {
    createInvitation
} from "../services/invitationService.js";


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