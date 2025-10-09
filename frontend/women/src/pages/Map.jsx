

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  // Static data (can later come from DB)
  const policeStations = [
    { name: "Police Station Jaipur Central", lat: 26.9124, lng: 75.7873 },
    { name: "Police Station Vaishali Nagar", lat: 26.9118, lng: 75.7485 },
  ];

  const womenShelters = [
    { name: "Women Helpline Shelter - Adarsh Nagar", lat: 26.9051, lng: 75.8125 },
    { name: "Women Safety Center - Bani Park", lat: 26.9302, lng: 75.7960 },
  ];

  const hospitals = [
    { name: "SMS Hospital", lat: 26.9000, lng: 75.8120 },
    { name: "Mahatma Gandhi Hospital", lat: 26.8841, lng: 75.8095 },
  ];

  useEffect(() => {
    if (map.current) return; // prevent multiple maps

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [75.7873, 26.9124], // Jaipur by default
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Directions plugin
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      controls: { inputs: false },
    });
    map.current.addControl(directions, "top-left");

    // Show user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = [position.coords.longitude, position.coords.latitude];
          setUserLocation(userCoords);

          // Add a blue marker for user
          new mapboxgl.Marker({ color: "#0000ff" })
            .setLngLat(userCoords)
            .setPopup(new mapboxgl.Popup().setHTML("<b>You are here</b>"))
            .addTo(map.current);

          map.current.flyTo({ center: userCoords, zoom: 13 });
        },
        () => alert("Location access denied. Please enable GPS."),
        { enableHighAccuracy: true }
      );
    }

    // Helper to add custom markers
    const addMarker = (place, className, color, isHospital = false) => {
      const el = document.createElement("div");
      el.className = `marker ${className}`;
      if (isHospital) el.innerHTML = "+";

      new mapboxgl.Marker({ element: el })
        .setLngLat([place.lng, place.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
            <b>${place.name}</b><br/>
            <button id="navigate-${place.lat}" style="
              margin-top:6px;
              background:#007bff;
              border:none;
              color:white;
              padding:4px 8px;
              border-radius:4px;
              cursor:pointer;">
              Start Navigation
            </button>
          `)
        )
        .addTo(map.current);

      // Event delegation (listen after popup opens)
      map.current.on("popupopen", () => {
        const btn = document.getElementById(`navigate-${place.lat}`);
        if (btn) {
          btn.addEventListener("click", () => {
            if (!userLocation) {
              alert("Please allow location access first.");
              return;
            }
            directions.setOrigin(userLocation);
            directions.setDestination([place.lng, place.lat]);
          });
        }
      });
    };

    // Add markers
    policeStations.forEach((p) => addMarker(p, "marker-police", "#007bff"));
    womenShelters.forEach((s) => addMarker(s, "marker-shelter", "#ff7f00"));
    hospitals.forEach((h) => addMarker(h, "marker-hospital", "red", true));
  }, [userLocation]);

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ width: "100%", height: "90vh", borderRadius: "12px" }}
    />
  );
};

export default Map;
