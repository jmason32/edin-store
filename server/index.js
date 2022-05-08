//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRouter from './routes/user.js';

//START APP 
const app = express();
dotenv.config();

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/user', userRouter)


app.use(cors());

// CREDS for DB Connection
const CONNECTION_URL = ""
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log('Sever up')))
    .catch( (error)=> console.log(error.message));
