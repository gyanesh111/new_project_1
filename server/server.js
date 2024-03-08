import express from "express"; 
import cors from 'cors';
import { connect } from 'mongoose';  
import morgan from "morgan"; 
import dotenv from "dotenv";
import pkg from 'body-parser';
const { json } = pkg;

//dotenv config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.status(200).send({
    message: "server running"
  }); 
});

// listen port
 app.listen(PORT, () => {
  console.log(`server is running ${process.env.NODE_MODE} and on port ${process.env.PORT}`)
 }
);