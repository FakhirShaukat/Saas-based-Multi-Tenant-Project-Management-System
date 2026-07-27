import Membership from "../models/Membership.js";


export const getOrganizationMembers = async (organizationId) => {

    const members = await Membership.find({
        organization: organizationId
    })
    .populate({
        path: "user",
        select: "name email avatar"
    });

    return members;

};



export const updateMemberRole = async ({
    organizationId,
    userId,
    role
}) => {

    const membership = await Membership.findOne({

        organization: organizationId,

        user: userId

    });


    if(!membership){

        throw new Error(
            "Member not found"
        );

    }


    if(membership.role === "owner"){

        throw new Error(
            "Owner role cannot be changed"
        );

    }


    membership.role = role;

    await membership.save();

    return membership;

};



export const removeMember = async ({
    organizationId,
    userId
}) => {


    const membership = await Membership.findOne({

        organization: organizationId,

        user: userId

    });


    if(!membership){

        throw new Error(
            "Member not found"
        );

    }


    if(membership.role === "owner"){

        throw new Error(
            "Owner cannot be removed"
        );

    }


    await Membership.deleteOne({

        _id: membership._id

    });


    return true;

};