//Package Imports
import express from 'express';

//Controller Import
import { createShop, getShops } from '../controllers/shop.js';

//Router Start
const router = express.Router();

/**
 * get shops - read shops
 * create shops
 * edit shops
 * delete shops
 */

/**
 * GET
 * Get Shops 
 * localhost:port/shops
 * 
 * Be able to get all shops if one isnt provided 
 */
router.get('/', getShops)


/**
 * POST
 * Create Shop 
 * localhost:port/shops/create
 */
router.post('/create', createShop)

/**
 * TODO:
 *  - Edit Shop 
 *  - Delete Shop
 */


export default router;