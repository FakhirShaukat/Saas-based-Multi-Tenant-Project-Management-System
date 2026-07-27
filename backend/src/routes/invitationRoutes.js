import express from "express";
import {acceptInvite, inviteMember} from "../controllers/invitationController.js";
import protect from "../middleware/authMiddleware.js";
import {checkOrgMembership} from "../middleware/orgMiddleware.js";
import {authorizeRoles} from "../middleware/roleMiddleware.js";
import { acceptInvitation } from "../services/invitationService.js";


const router = express.Router();


router.post(
    "/orgs/:orgId/invite",
    protect,
    checkOrgMembership,
    authorizeRoles("owner", "admin"),
    inviteMember
);

router.post(
    "/invitations/:token/accept",
    protect,
    acceptInvite
);

export default router;