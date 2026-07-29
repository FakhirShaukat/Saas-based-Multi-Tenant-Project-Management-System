import express from "express";

import {
    getActivities
} from "../controllers/activityController.js";

import protect from "../middleware/authMiddleware.js";

import {
    checkOrgMembership
} from "../middleware/orgMiddleware.js";


const router = express.Router();



router.get(

    "/orgs/:orgId/activity",

    protect,

    checkOrgMembership,

    getActivities

);



export default router;