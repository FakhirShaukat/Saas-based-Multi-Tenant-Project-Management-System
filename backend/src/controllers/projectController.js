import { createProjectSchema } from "../validators/projectValidator.js";
import { createProject } from "../services/projectService.js";
import { getOrganizationProjects } from "../services/projectService.js"
import { updateProjectSchema } from "../validators/projectValidator.js"
import { updateProject } from "../services/projectService.js"
import { deleteProject } from "../services/projectService.js";



export const createProjectController = async (
    req,
    res
) => {


    try {


        const validatedData =
            createProjectSchema.parse(
                req.body
            );


        const project =
            await createProject({

                name:
                    validatedData.name,

                description:
                    validatedData.description,

                organizationId:
                    req.params.orgId,

                userId:
                    req.user._id

            });



        res.status(201).json({

            success: true,

            message:
                "Project created successfully",

            data: project

        });



    } catch (error) {


        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const getProjectsController = async (
    req,
    res
) => {

    try {

        const projects =
            await getOrganizationProjects(
                req.params.orgId
            );


        res.status(200).json({

            success: true,

            data: projects

        });


    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

export const updateProjectController = async (
    req,
    res
) => {


    try {


        const validatedData =
            updateProjectSchema.parse(
                req.body
            );


        const project =
            await updateProject({

                projectId:
                    req.params.projectId,

                data:
                    validatedData

            });



        res.status(200).json({

            success: true,

            message:
                "Project updated successfully",

            data: project

        });



    } catch (error) {


        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

export const deleteProjectController = async(
    req,
    res
)=>{

    try{


        await deleteProject(
            req.params.projectId
        );


        res.status(200).json({

            success:true,

            message:
            "Project deleted successfully"

        });


    }catch(error){

        res.status(400).json({

            success:false,

            message:error.message

        });

    }

};