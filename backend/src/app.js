import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orgRoutes from './routes/orgRoutes.js'
import invitationRoutes from "./routes/invitationRoutes.js";


const app = express();


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/orgs", orgRoutes)
console.log("Invitation routes loaded");
app.use("/api", invitationRoutes)




app.get("/api/health", (req,res)=>{
    res.json({
        success:true,
        message:"Server is running"
    });
});


export default app;