/**
 * @file Elements module to reference DOM elements used in the admin page.
 */

// HOMEPAGE
export const serverStatus = document.getElementById("server-status");
export const usernameText = document.getElementById("username-text");
export const driversCounter = document.getElementById("drivers-counter");

// EDIT DRIVER MODAL
export const driverEditButtons = document.querySelectorAll("[data-driver]");
export const driverEditModal = document.getElementById("edit-modal");
export const driverEditOverlay = document.getElementById("edit-overlay");
export const driverEditModalContent =
  document.getElementById("edit-modal-content");
export const driverModalExitBtn = document.getElementById("exit-button");
