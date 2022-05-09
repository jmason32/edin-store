/**
 * Routes - User
 */

//Package Imports
import express from 'express';

// Controller Imports
import { authUser, registerUser } from '../controllers/user.js';

//Router Start
const router = express.Router();

/**
 * TODO:
 *  getUser
 *  logoutUser
 *  editUser 
 *  deleteUser 
 */

/**
 * Register User
 *  localhost:port/user
 * 
 *  route to create users 
 * 
 * @param {*} req 
 * @param {*} res 
 */
router.post('/', registerUser)
router.post('/login', authUser)

export default router;