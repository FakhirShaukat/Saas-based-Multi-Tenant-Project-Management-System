import express from "express";
import {
    signup,
    login,
    logout,
    getMe,
    forgotPasswordController,
    resetPasswordController
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


router.post("/signup", signup);

router.post("/login", login);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:token", resetPasswordController);
router.post("/logout", logout);

router.get(
    "/me",
    protect,
    getMe
);


export default router;