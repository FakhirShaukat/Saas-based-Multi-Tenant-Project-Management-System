import { z } from "zod";


export const createTaskSchema = z.object({

    title:z.string().min(3),

    description:z.string()
        .optional(),

    assignedTo:z.string()
        .optional(),

    priority:z.enum([
        "low",
        "medium",
        "high"
    ])
    .optional(),

    dueDate:z.string()
        .optional()

});