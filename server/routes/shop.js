//Package Imports
import express from 'express';

//Controller Import
import { getShops } from '../controllers/shop.js';

//Router Start
const router = express.Router();

/**
 * get shops - read shops
 * create shops
 * edit shops
 * delete shops
 */

/**
 * Get Shops 
 * localhost:port/shops
 * 
 * Be able to get all shops if one isnt provided 
 */
router.get('/', getShops)


export default router;