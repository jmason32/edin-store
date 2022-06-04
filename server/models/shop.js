import mongoose from "mongoose";

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    booking_link: {
      type: String,
      required: false,
    },
    shop_owner: {
      type: String,
      required: true
    },
    shop_text: {
      type: String,
    },
    shop_hours: {
      type: Array
    },
    instagram: {
      type: String
    },
    speciality: {
      type: Array
    },
    address: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },  
  },
  {
    timestamps: true,
  }
);


const Shop = mongoose.model("shop", shopSchema);

export default Shop;