import express from "express";
import {
    getMembers,
    updateRole,
    removeMember
} from "../controllers/memberController.js";

import protect from "../middleware/authMiddleware.js";
import { checkOrgMembership } from "../middleware/orgMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";


const router = express.Router();


router.get(
    "/orgs/:orgId/members",
    protect,
    checkOrgMembership,
    authorizeRoles("owner", "admin"),
    getMembers
);



router.patch(
    "/orgs/:orgId/members/:userId",
    protect,
    checkOrgMembership,
    authorizeRoles("owner"),
    updateRole
);



router.delete(
    "/orgs/:orgId/members/:userId",
    protect,
    checkOrgMembership,
    authorizeRoles("owner"),
    removeMember
);


export default router;