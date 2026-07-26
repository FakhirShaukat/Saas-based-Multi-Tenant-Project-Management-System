import express from "express";
import {
    inviteMember
} from "../controllers/invitationController.js";

import protect from "../middleware/authMiddleware.js";
import {
    checkOrgMembership
} from "../middleware/orgMiddleware.js";

import {
    authorizeRoles
} from "../middleware/roleMiddleware.js";


const router = express.Router();


router.post(
    "/orgs/:orgId/invite",
    protect,
    checkOrgMembership,
    authorizeRoles("owner", "admin"),
    inviteMember
);


export default router;