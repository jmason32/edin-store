import express from 'express';

import { getShops } from '../controllers/shop.js';



const router = express.Router();

/**
 * Route - url/shops/all
 *  to get all shops
 * 
 */
router.get('/', getShops)




export default router;