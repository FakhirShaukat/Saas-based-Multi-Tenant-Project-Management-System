import crypto from "crypto";
import Invitation from "../models/Invitation.js";


export const createInvitation = async ({
    organizationId,
    email,
    role
}) => {


    const token = crypto
        .randomBytes(32)
        .toString("hex");


    const invitation = await Invitation.create({

        organization: organizationId,

        email,

        role,

        token,

        expiresAt:
            new Date(
                Date.now() + 
                7 * 24 * 60 * 60 * 1000
            )

    });


    return invitation;

};