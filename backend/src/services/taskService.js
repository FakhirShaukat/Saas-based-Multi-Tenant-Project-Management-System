import Task from "../models/Task.js";
import Membership from "../models/Membership.js";


export const createTask = async ({
    title,
    description,
    projectId,
    organizationId,
    userId,
    assignedTo,
    priority,
    dueDate
}) => {


    const task = await Task.create({

        title,

        description,

        project: projectId,

        organization: organizationId,

        createdBy: userId,

        assignedTo: assignedTo || null,

        priority: priority || "medium",

        dueDate: dueDate || null

    });


    return task;

};

export const getProjectTasks = async (projectId) => {

    const tasks = await Task.find({
        project: projectId
    })
    .populate({
        path: "createdBy",
        select: "name email avatar"
    })
    .populate({
        path: "assignedTo",
        select: "name email avatar"
    });


    return tasks;

};

export const assignTask = async ({
    taskId,
    userId,
    organizationId
}) => {


    const task = await Task.findById(taskId);


    if(!task){

        throw new Error(
            "Task not found"
        );

    }


    const membership =
        await Membership.findOne({

            user:userId,

            organization:organizationId

        });


    if(!membership){

        throw new Error(
            "User is not a member of this organization"
        );

    }


    task.assignedTo = userId;


    await task.save();


    return task;

};

export const updateTask = async ({
    taskId,
    updates
}) => {


    const task = await Task.findById(
        taskId
    );


    if(!task){

        throw new Error(
            "Task not found"
        );

    }


    Object.assign(
        task,
        updates
    );


    await task.save();


    return task;

};

export const deleteTask = async (taskId) => {


    const task = await Task.findById(
        taskId
    );


    if(!task){

        throw new Error(
            "Task not found"
        );

    }


    await Task.deleteOne({
        _id: taskId
    });


    return true;

};