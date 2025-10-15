import mongoose from "mongoose";

const emergencySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contacts: [
    {
      name: { type: String, required: true },       // optional: contact name
      phoneNumber: { type: String, required: true },
      relation: { type: String },                   // optional: "Friend", "Family", etc.
    }
  ],
}, { timestamps: true });

export default mongoose.model("Emergency", emergencySchema);
