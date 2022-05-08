//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRouter from './routes/user.js';

//START APP 
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/user', userRouter)


app.use(cors());

// CREDS for DB Connection
const CONNECTION_URL = ""
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://jay2:jay@cluster0.amnj6.mongodb.net/EyeBeauty?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log('Sever up')))
    .catch( (error)=> console.log(error.message));
