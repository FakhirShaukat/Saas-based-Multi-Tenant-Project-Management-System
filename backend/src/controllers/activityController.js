import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {

    try {

        const activities = await Activity.find({
            organization: req.params.orgId
        })
        .populate({
            path: "user",
            select: "name email avatar"
        })
        .sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            data: activities
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};