// This script runs independently to manage voice commands.

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// These variables will act as a shared state between this script and the React app.
let alertFlag = false;
let permissionDenied = false;
let recognition = null;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = true;

  // Start listening for voice commands as soon as the script loads.
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim();
    console.log("You said:", transcript);

    // If the emergency phrase is detected, set the flag.
    if (transcript.toLowerCase().includes("guardian help help")) {
      alertFlag = true;
      console.log("🚨 Emergency voice command detected!");
    }
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
    // Automatically restart listening if permission has not been denied.
    if (!permissionDenied) {
      console.log("Restarting speech recognition...");
      recognition.start();
    }
  };

  recognition.onerror = (event) => {
    console.error("Error in recognition:", event.error);
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      permissionDenied = true;
      // The React component will inform the user about the permission denial.
    }
  };
} else {
  console.error("SpeechRecognition is not supported in this browser.");
}

// --- FUNCTIONS TO BE IMPORTED AND USED BY THE REACT COMPONENT ---

/**
 * Manually triggers the alert flag. This is called when the SOS button is pressed.
 */
export function triggerSosFromButton() {t
  alertFlag = true;
  console.log("🚨 SOS button pressed! Alert flag set to true.");
}

/**
 * Allows the React component to check the current status of the alert.
 * @returns {boolean} - True if an alert has been triggered.
 */
export function getAlert() {
  return alertFlag;
}

/**
 * Allows the React component to reset the alert flag after it has been handled.
 */
export function resetAlert() {
  alertFlag = false;
  console.log("Alert flag has been reset to false.");
}
