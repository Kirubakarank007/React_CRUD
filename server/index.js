import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'



const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
console.log("MongoDB URL:", process.env.MONGOURL); 



const PORT=process.env.PORT || 5005;
const URL =process.env.MONGOURL;

mongoose.createConnection(URL)
mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully");

    app.listen(PORT,()=>{
        console.log(`Server is running on port : ${PORT} `)
    })
}).catch(error=> console.log(error))