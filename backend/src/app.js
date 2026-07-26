import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orgRoutes from './routes/orgRoutes.js'


const app = express();


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
console.log("Org routes loaded");
app.use("/api/orgs", orgRoutes)




app.get("/api/health", (req,res)=>{
    res.json({
        success:true,
        message:"Server is running"
    });
});


export default app;