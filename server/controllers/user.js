import User from '../models/user.js'

import asyncHandler from 'express-async-handler';

export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //First check if user already exists

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic
        })
    }
    
    res.json({
        name, 
        email
    })
})


