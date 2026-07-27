import crypto from "crypto";
import Invitation from "../models/Invitation.js";
import Membership from "../models/Membership.js"


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

export const acceptInvitation = async ({
    token,
    userId,
    userEmail
}) => {


    const invitation = await Invitation.findOne({
        token
    });


    if(!invitation){

        throw new Error(
            "Invalid invitation"
        );

    }


    if(invitation.status !== "pending"){

        throw new Error(
            "Invitation already used"
        );

    }


    if(invitation.expiresAt < new Date()){

        throw new Error(
            "Invitation expired"
        );

    }


    if(invitation.email !== userEmail){

        throw new Error(
            "This invitation is not for your account"
        );

    }


    const existingMembership =
        await Membership.findOne({

            user:userId,

            organization:
            invitation.organization

        });


    if(existingMembership){

        throw new Error(
            "You are already a member of this organization"
        );

    }


    const membership =
        await Membership.create({

            user:userId,

            organization:
            invitation.organization,

            role:
            invitation.role

        });



    invitation.status = "accepted";

    await invitation.save();



    return membership;

};