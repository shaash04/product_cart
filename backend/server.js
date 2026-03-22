import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import {connectDB} from './config/db.js';
import productRoutes from "./routes/product.route.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
app.use(express.json());

const PORT=process.env.PORT;
app.use("/api/products",productRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("/home/shalini/shaash04_dev/project1/frontend/dist"));       
    app.use((req,res)=>{
        res.sendFile("/home/shalini/shaash04_dev/project1/frontend/dist/index.html");
    });
}
app.listen(PORT,()=>{
    connectDB();
    console.log("server started at http://localhost:"+ PORT);
});