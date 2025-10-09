import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point'
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
  }
}, {_id: false});
const womenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    smartSafetyDeviceId: { type: String, required: true },
    location:locationSchema
},{timestamps:true});

womenSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

womenSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

womenSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

const user = mongoose.model("women", womenSchema);

export default user