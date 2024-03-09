import express from "express"; 
import cors from 'cors';  
import morgan from "morgan"; 
import dotenv from "dotenv";
import pkg from 'body-parser';
import connectdb from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js";
const { json } = pkg;


//dotenv config
dotenv.config();

//rest object
const app = express();
const PORT = process.env.PORT || 8080;

app.use(json());
app.use(cors());
app.use(morgan('dev'))

//routes
 app.use('/api/v1/user', userRoutes);

// listen port
 app.listen(PORT, () => {
  console.log(`server is running ${process.env.NODE_MODE} and on port ${process.env.PORT}`)
 }
);

//heloo
//connect db
connectdb();