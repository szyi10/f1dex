import {
  driverEditButtons,
  driverEditModal,
  driverEditModalContent,
  driverEditOverlay,
  driverModalExitBtn,
} from "./elements.js";

/**
 * Toggles the visibility of multiple elements.
 * @param {HTMLElement[]} elements - The elements to show or hide.
 * @param {string} state - The state to set ("show" or "hide").
 */
function toggleVisibility(elements, state) {
  const showClasses = ["opacity-100", "pointer-events-auto"];
  const hideClasses = ["opacity-0", "pointer-events-none"];

  elements.forEach((element) => {
    if (state === "show") {
      element.classList.remove(...hideClasses);
      element.classList.add(...showClasses);
    } else if (state === "hide") {
      element.classList.remove(...showClasses);
      element.classList.add(...hideClasses);
    }
  });
}

/**
 * Searches for a driver by name.
 * @param {string} name - The name of the driver to search for.
 * @returns {Promise<Object>} The driver data.
 * @throws Will throw an error if the fetch request fails.
 */
async function searchDriver(name) {
  const res = await fetch(`/api/v1/drivers/search?query=${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch driver.");
  }

  const data = await res.json();
  return data[0];
}

/**
 * Creates an input element and appends it to the modal.
 * @param {string} label - The label for the input.
 * @param {string} value - The value for the input.
 */
function createInput(label, value) {
  const div = document.createElement("div");
  div.classList = "w-full flex items-center my-1";
  div.innerHTML = `
    <label for="${label}" class="font-medium mr-1">${label}</label>
    <input
      type="text"
      value="${value}"
      name="${label}"
      class="border border-slate-300 rounded bg-slate-100 w-full p-2 focus:outline-none focus:border-blue-500"
    />
  `;
  driverEditModalContent.append(div);
}

window.addEventListener("DOMContentLoaded", () => {
  driverEditButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const driver = await searchDriver(button.dataset.driver);

      // Clear previous inputs
      toggleVisibility([driverEditModal, driverEditOverlay], "show");

      // Create input elements
      Object.entries(driver).forEach(([key, value]) => {
        createInput(key, value);
      });
    });
  });

  driverModalExitBtn.addEventListener("click", () => {
    toggleVisibility([driverEditModal, driverEditOverlay], "hide");
  });
});
