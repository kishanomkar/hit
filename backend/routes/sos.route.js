// backend/routes/sos.route.js
import express from "express";
import twilio from "twilio";

import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Replace with your own credentials (or use environment variables)
const accountSid = process.env.TWILIO_ACCOUNT_SID || "your_sid_here";
const authToken = process.env.TWILIO_AUTH_TOKEN || "your_auth_token_here";
const client = twilio(accountSid, authToken);

router.post("/send-sos", async (req, res) => {
  try {
    const { latitude, longitude, contacts } = req.body;

    const mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;
    const message = `🚨 SOS ALERT 🚨\nI need help right now!\nMy location: ${mapLink}`;

    for (const number of contacts) {
      // ✅ Send WhatsApp message
      await client.messages.create({
        from: "whatsapp:" + process.env.TWILIO_SANDBOX_NUMBER, // Twilio sandbox number
        to: `whatsapp:${number}`,
        body: message,
      });

      // ✅ Send SMS
      await client.messages.create({
        from: process.env.TWILIO_SMS_NUMBER, // Your Twilio SMS number
        to: number,
        body: message,
      });
    }

    res.status(200).json({ success: true, message: "SOS sent successfully!" });
  } catch (error) {
    console.error("Twilio Error:", error);
    res.status(500).json({ success: false, message: "Failed to send SOS", error });
  }
});

export default router;
