import emergencyModel from "../models/emergency.model.js";

// Add or update emergency contacts for a user
export const addOrUpdateContacts = async (req, res) => {
  try {
    const { userId, contacts } = req.body;

    if (!userId || !contacts || !Array.isArray(contacts) || contacts.length === 0) {
      return res.status(400).json({ message: "User ID and contacts are required" });
    }

    if (contacts.length > 5) {
      return res.status(400).json({ message: "Maximum 5 emergency contacts allowed" });
    }

    // Upsert: if document exists, update; else create new
    const emergency = await emergencyModel.findOneAndUpdate(
      { userId },
      { contacts },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, emergency });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get emergency contacts of a user
export const getContacts = async (req, res) => {
  try {
    const { userId } = req.params;

    const emergency = await emergencyModel.findOne({ userId });

    if (!emergency) {
      return res.status(404).json({ message: "No emergency contacts found for this user" });
    }

    res.status(200).json({ success: true, contacts: emergency.contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
