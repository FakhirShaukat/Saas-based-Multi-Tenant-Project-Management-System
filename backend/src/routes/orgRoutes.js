import express from "express";
import { createOrg,getOrganizations } from "../controllers/orgController.js";
import protect from "../middleware/authMiddleware.js";
import {
    checkOrgMembership
} from "../middleware/orgMiddleware.js";

import {
    authorizeRoles
} from "../middleware/roleMiddleware.js";


const router = express.Router();


router.post(
    "/",
    protect,
    createOrg
);

router.get(
    "/",
    protect,
    getOrganizations
);

router.get(
    "/:orgId/test-owner",
    protect,
    checkOrgMembership,
    authorizeRoles("owner"),
    (req,res)=>{

        res.json({
            success:true,
            message:"Owner access granted"
        });

    }
);

export default router;