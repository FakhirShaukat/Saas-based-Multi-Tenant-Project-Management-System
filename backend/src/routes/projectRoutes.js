import express from "express";
import {
    createProjectController,
    getProjectsController,
    updateProjectController,
    deleteProjectController } from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";
import { checkOrgMembership } from "../middleware/orgMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { checkProjectPermission } from "../middleware/projectMiddleware.js";

const router = express.Router();



router.post(
    "/orgs/:orgId/projects",
    protect,
    checkOrgMembership,
    authorizeRoles(
        "owner",
        "admin"
    ),
    createProjectController
);

router.get(
    "/orgs/:orgId/projects",
    protect,
    checkOrgMembership,
    authorizeRoles(
        "owner",
        "admin"
    ),
    getProjectsController
);

router.patch(
    "/projects/:projectId",
    protect,
    checkProjectPermission(
        "owner",
        "admin"
    ),
    updateProjectController
);

router.delete(
    "/projects/:projectId",
    protect,
    checkProjectPermission(
        "owner",
        "admin"
    ),
    deleteProjectController
);

export default router;