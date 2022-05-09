/**
 * Controllers - Users
 *  Defines the functionalitity for Users within the app
 */

//Model
import User from '../models/user.js'

//Package Imports 
import asyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';

/**
 * registerUser - create user (done)
 * getUser
 * editUser
 * deleteUser
 */

/**
 * Register User 
 *  Function to create a new user
 * @param {*} req 
 * @param {*} res 
 */
export const registerUser = asyncHandler(async (req, res) => {
    
    //Deconstruct user variables from the request body
    const {name, email, password} = req.body

    //First check if user already exists, by checking database for email 
    const userExists = await User.findOne({email})

    // If the user already exists, throw error 
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Create user, using variables from request 
    const user = await User.create({
        name, email, password
    })

    //If created user successful, send response status
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400);
        throw new Error("Error occoured")
    }
    
})

export const authUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400);
        throw new Error("Error occoured")
    }
})
