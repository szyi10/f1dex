/**
 * @file Main module for initializing the admin page and updating DOM elements with API data.
 */
import * as elements from "./elements.js";
import * as api from "./api.js";
import "./editDriverModal.js";

/**
 * Initializes the admin page and populates DOM elements with API data.
 * @listens DOMContentLoaded - Executes when the DOM is fully loaded.
 */
window.addEventListener("DOMContentLoaded", async () => {
  // Exit if not on the admin page
  if (location.pathname !== "/admin") return;

  try {
    const [status, username, drivers] = await Promise.all([
      api.checkStatus(),
      api.getUsername(),
      api.getDrivers(),
    ]);

    // Update DOM elements with fetched data
    if (status && location.pathname == "/admin") {
      elements.serverStatus.innerText = `${status.text} - ${status.code}`;
    }
    if (username && location.pathname == "/admin") {
      elements.usernameText.innerText = username.username;
    }
    if (drivers && location.pathname == "/admin") {
      elements.driversCounter.innerText = drivers.length;
    }
  } catch (error) {
    console.error("Initialization failed:", error);
  }
});
