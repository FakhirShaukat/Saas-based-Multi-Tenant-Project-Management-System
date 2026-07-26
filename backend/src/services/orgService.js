import Organization from "../models/Organization.js";
import Membership from "../models/Membership.js";


export const createOrganization = async ({
    name,
    userId
}) => {

    const organization = await Organization.create({
        name,
        owner: userId
    });


    await Membership.create({
        user: userId,
        organization: organization._id,
        role: "owner"
    });


    return organization;
};