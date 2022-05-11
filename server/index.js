/**
 * Eye Beauty Board 
 *  
 *  index.js
 *    handles server 
 * 
 */


//Package Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//Route Imports
import userRoutes from './routes/user.js';
import shopRoutes from './routes/shop.js';

//START APP 
const app = express();
dotenv.config(); //Config

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

// Routes

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  next();
  });

// localhost:8000/user
app.use('/user', userRoutes)

// localhost:8000/shop
app.use('/shops', shopRoutes)

app.use(cors());

// CREDS for DB Connection
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log('Sever up')))
    .catch( (error)=> console.log(error.message));
