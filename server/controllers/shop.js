/**
 * Controllers - Shop
 *  Defines the functionalitity 
 */

// Models
import Shop from "../models/shop.js";
import asyncHandler from "express-async-handler";
/**
 * 
 * create-shop 
 * edit-shop
 * get-shop : read-shop
 * delete-shop : 
 * 
 */

/**
 * Create Shop
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const createShop = asyncHandler( async (req, res) => {
  const {name, email, shop_owner} = req.body

  //First check if Shop exists with the same email 
  const shopExists = await Shop.findOne({email})

  //If Shop exists, throw error
  if (shopExists) {
    res.status(400);
      throw new Error("Shop already exists");
  }

  const shop = await Shop.create({
    name, email, shop_owner
  })

  if (shop) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.status(201).json({
      _id: shop._id,
      name: shop.name,
      email: shop.email,
      shop_owner: "meitsme" // come back to fix
    })
  }
  else {
    res.status(400);
    throw new Error("Error occoured")
  }

})

/**
 * Get Shops
 * 
 * @param {*} req 
 * @param {*} res 
 */


// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
export const getShops = asyncHandler(async (req, res) => {
    const shop = await Shop.find();
    res.json(shop);
  });

//@description     Fetch single Shop
//@route           GET /api/shop/:id
//@access          Public
export const getShopById = asyncHandler(async (req, res) => {
    const note = await SHOP.findById(req.params.id);
  
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  
    res.json(note);
  });

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
const UpdateShop = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
  
    const shop = await Shop.findById(req.params.id);
  
    if (shop.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (shop) {
    //   note.title = title;
    //   note.content = content;
    //   note.category = category;
  
    //   const updatedNote = await note.save();
    //   res.json(updatedNote);
    res.json("here")
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
  });