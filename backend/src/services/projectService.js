import Project from "../models/Project.js";
import { createActivity } from "./activityService.js";


export const createProject = async ({
    name,
    description,
    organizationId,
    userId
}) => {


    const project = await Project.create({

        name,

        description,

        organization:
            organizationId,

        createdBy:
            userId

    });



    await createActivity({

        organizationId,

        userId,

        action: "created",

        entityType: "project",

        entityId:
            project._id,

        description:
            `Created project "${project.name}"`

    });



    return project;

};

export const getOrganizationProjects = async (
    organizationId
) => {

    const projects = await Project.find({
        organization: organizationId
    })
        .populate({
            path: "createdBy",
            select: "name email avatar"
        });


    return projects;

};

export const updateProject = async ({
    projectId,
    data
}) => {


    const project = await Project.findById(
        projectId
    );


    if (!project) {

        throw new Error(
            "Project not found"
        );

    }


    Object.assign(
        project,
        data
    );


    await project.save();


    return project;

};

export const deleteProject = async (
    projectId
) => {

    const project = await Project.findById(
        projectId
    );


    if (!project) {

        throw new Error(
            "Project not found"
        );

    }


    await Project.deleteOne({
        _id: projectId
    });


    return true;

};