import { useState, useEffect } from "react";

let currentLocation = { latitude: null, longitude: null };

// ✅ Custom hook for live tracking
export const useLocation = () => {
  const [location, setLocation] = useState(currentLocation);

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Create a watcher that updates the position
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const newLocation = {
            latitude: pos.coords.latitude.toFixed(4),
            longitude: pos.coords.longitude.toFixed(4),
          };
          currentLocation = newLocation; // update global state
          setLocation(newLocation); // update component state
        },
        (err) => {
          console.error("Error getting location:", err);
          // Handle errors like user denying permission
          setLocation({ latitude: "Error", longitude: "Error" });
        },
        {
          enableHighAccuracy: true, // Request a more accurate position
          timeout: 10000, // Maximum time (in ms) to wait for a position
          maximumAge: 0, // Don't use a cached position
        }
      );

      // Cleanup function to clear the watcher when the component unmounts
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error("Geolocation not supported by this browser.");
      setLocation({ latitude: "N/A", longitude: "N/A" });
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return location;
};

// ✅ Function to get latest location when called (can be used outside of React components)
export const getCurrentLocation = () => {
  return currentLocation;
};