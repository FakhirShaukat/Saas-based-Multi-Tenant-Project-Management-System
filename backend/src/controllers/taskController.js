import { createTask, getProjectTasks, assignTask, updateTask, deleteTask } from "../services/taskService.js";
import { createTaskSchema } from "../validators/taskValidator.js";
import { assignTaskSchema } from "../validators/taskAssignValidator.js";
import { updateTaskSchema } from "../validators/updateTaskValidator.js";


export const createTaskController = async (
    req,
    res
) => {


    try {


        const validatedData =
            createTaskSchema.parse(
                req.body
            );


        const task = await createTask({

            title:
                validatedData.title,


            description:
                validatedData.description,


            projectId:
                req.project._id,


            organizationId:
                req.project.organization,


            userId:
                req.user._id,


            assignedTo:
                validatedData.assignedTo,


            priority:
                validatedData.priority,


            dueDate:
                validatedData.dueDate

        });



        res.status(201).json({

            success: true,

            message:
                "Task created successfully",

            data: task

        });



    } catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const getTasksController = async (
    req,
    res
) => {

    try {

        const tasks = await getProjectTasks(
            req.params.projectId
        );


        res.status(200).json({

            success: true,

            data: tasks

        });


    } catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const assignTaskController = async(
    req,
    res
)=>{


    try{


        const validatedData =
            assignTaskSchema.parse(
                req.body
            );


        const task = await assignTask({

            taskId:
            req.params.taskId,


            userId:
            validatedData.assignedTo,


            organizationId:
            req.task.organization

        });


        res.status(200).json({

            success:true,

            message:
            "Task assigned successfully",

            data:task

        });


    }catch(error){


        res.status(400).json({

            success:false,

            message:error.message

        });


    }

};

export const updateTaskController = async(
    req,
    res
)=>{

    try{


        const validatedData =
            updateTaskSchema.parse(
                req.body
            );


        const task =
            await updateTask({

                taskId:
                req.params.taskId,


                updates:
                validatedData

            });



        res.status(200).json({

            success:true,

            message:
            "Task updated successfully",

            data:task

        });



    }catch(error){


        res.status(400).json({

            success:false,

            message:error.message

        });


    }

};

export const deleteTaskController = async(
    req,
    res
)=>{


    try{


        await deleteTask(
            req.params.taskId
        );


        res.status(200).json({

            success:true,

            message:
            "Task deleted successfully"

        });


    }catch(error){


        res.status(400).json({

            success:false,

            message:error.message

        });


    }

};