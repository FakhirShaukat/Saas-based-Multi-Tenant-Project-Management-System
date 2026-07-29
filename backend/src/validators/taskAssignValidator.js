import { z } from "zod";


export const assignTaskSchema = z.object({

    assignedTo: z.string()

});