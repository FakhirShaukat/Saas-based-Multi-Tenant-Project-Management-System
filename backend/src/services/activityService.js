import Activity from "../models/Activity.js";


export const createActivity = async({

    organizationId,

    userId,

    action,

    entityType,

    entityId,

    description

})=>{


    const activity =
        await Activity.create({

            organization:
            organizationId,


            user:
            userId,


            action,

            entityType,

            entityId,

            description

        });


    return activity;

};