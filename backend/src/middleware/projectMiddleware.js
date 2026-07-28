import Project from "../models/Project.js";
import Membership from "../models/Membership.js";


export const checkProjectPermission = (...allowedRoles) => {

    return async(req, res, next) => {

        try {


            const project = await Project.findById(
                req.params.projectId
            );


            if(!project){

                return res.status(404).json({

                    success:false,

                    message:"Project not found"

                });

            }



            const membership =
                await Membership.findOne({

                    user:req.user._id,

                    organization:
                    project.organization

                });



            if(!membership){

                return res.status(403).json({

                    success:false,

                    message:
                    "You are not a member of this organization"

                });

            }



            if(
                !allowedRoles.includes(
                    membership.role
                )
            ){

                return res.status(403).json({

                    success:false,

                    message:
                    "You do not have permission for this action"

                });

            }



            req.project = project;

            req.membership = membership;


            next();



        } catch(error){

            res.status(500).json({

                success:false,

                message:error.message

            });

        }

    };

};