/**
 * @file API module for handling network requests to fetch data.
 */

/**
 * Generic function to fetch data from API endpoints.
 * @param {string} url - The API endpoint URL.
 * @param {string} err - Error message to display if the fetch fails.
 * @returns {Promise<any|null>} - Parsed JSON data or null in case of an error.
 */
export async function fetchData(url, err) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(err);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Fetches the server's health status.
 * @async
 * @returns {Promise<{code: number, text: string}>} - Server status code and text.
 */
export async function checkStatus() {
  try {
    const res = await fetch("/api/v1/health");
    return { code: res.status, text: res.statusText };
  } catch (error) {
    console.error(error);
    return { code: 400, text: "CLIENT ERROR" };
  }
}

/**
 * Fetches the logged-in user's username
 * @async
 * @returns {Promise<string|null>} - The username or null if an error occurs.
 */
export const getUsername = () =>
  fetchData("/api/v1/auth/protected", "Failed to fetch username");

/**
 * Fetches the list of drivers.
 * @async
 * @returns {Promise<Array|null>} - Array of drivers or null if an error occurs.
 */
export const getDrivers = () =>
  fetchData("/api/v1/drivers", "Failed to fetch drivers");
