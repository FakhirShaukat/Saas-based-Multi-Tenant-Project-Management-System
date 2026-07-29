import express from "express";

import {
    createTaskController, getTasksController, assignTaskController, updateTaskController, deleteTaskController
} from "../controllers/taskController.js";

import protect from "../middleware/authMiddleware.js";

import {
    checkProjectPermission
} from "../middleware/projectMiddleware.js";

import {
    checkTaskPermission
} from "../middleware/taskMiddleware.js"

const router = express.Router();



router.post(

    "/projects/:projectId/tasks",

    protect,

    checkProjectPermission(
        "owner",
        "admin"
    ),

    createTaskController

);

router.get(
    "/projects/:projectId/tasks",

    protect,

    checkProjectPermission(
        "owner",
        "admin",
        "member"
    ),

    getTasksController

)

router.patch(

    "/tasks/:taskId/assign",

    protect,

    checkTaskPermission(),

    assignTaskController

);

router.patch(

    "/tasks/:taskId",

    protect,

    checkTaskPermission(
        "owner",
        "admin"
    ),

    updateTaskController

);

router.delete(

    "/tasks/:taskId",

    protect,

    checkTaskPermission(
        "owner",
        "admin"
    ),

    deleteTaskController

);

export default router;