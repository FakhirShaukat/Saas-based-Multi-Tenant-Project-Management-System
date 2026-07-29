import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orgRoutes from './routes/orgRoutes.js'
import invitationRoutes from "./routes/invitationRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"

const app = express();


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/orgs", orgRoutes)
app.use("/api", invitationRoutes);
app.use("/api", memberRoutes);
app.use("/api", projectRoutes)
app.use("/api", taskRoutes)




app.get("/api/health", (req,res)=>{
    res.json({
        success:true,
        message:"Server is running"
    });
});


export default app;