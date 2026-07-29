import Task from "../models/Task.js";


export const checkTaskPermission = (...allowedRoles)=>{

    return async(req,res,next)=>{

        try{

            const task =
                await Task.findById(
                    req.params.taskId
                );


            if(!task){

                return res.status(404).json({
                    success:false,
                    message:"Task not found"
                });

            }


            req.task = task;


            next();


        }catch(error){

            res.status(500).json({
                success:false,
                message:error.message
            });

        }

    };

};