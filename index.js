import  Express  from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import connectToDatabase from './database/database.js'
import productRoute from './routes/productRoutes.js'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 4001


const app = Express()

dotenv.config();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',productRoute)

connectToDatabase(process.env.PASSWORD,process.env.APP);
app.listen(PORT,()=>{
    console.log("Sever is running at " ,PORT)
})
