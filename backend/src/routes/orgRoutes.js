import express from "express";
import { createOrg } from "../controllers/orgController.js";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();


router.post(
    "/",
    protect,
    createOrg
);


export default router;