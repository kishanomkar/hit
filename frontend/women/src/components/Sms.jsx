import React, { useState, useEffect } from "react";
import { getAlert } from "./SpeechRecognition";


export let sendComposer = null
export default function SosComposer({ contacts = [] }) {
  const [loading, setLoading] = useState(false);
  
   sendComposer = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch("http://localhost:3000/api/emergency/send-sos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latitude, longitude, contacts }),
          });

          const data = await res.json();
          if (data.success) {
            alert("🚨 SOS sent successfully via WhatsApp and SMS!");
          } else {
            alert("❌ Failed to send SOS.");
          }
        } catch (error) {
          console.error(error);
          alert("Error sending SOS request.");
        }

        setLoading(false);
      },
      (err) => {
        setLoading(false);
        alert("Could not get location. Allow location access and try again.");
        console.error(err);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Auto trigger if voice alert detected
  useEffect(() => {
    const interval = setInterval(() => {
      if (getAlert()) {
        console.log("🚨 Voice trigger detected!");
        sendComposer();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <button
      onClick={sendComposer}
      disabled={loading}
      className={`${
        loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
      } text-white px-4 py-2 rounded-lg font-semibold transition`}
    >
      {loading ? "Sending SOS..." : "🚨 Send SOS Alert"}
    </button>
  );
}
