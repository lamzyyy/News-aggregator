// Library Imports
import axios from "axios";

/**
 * Fetches news data from the specified URL.
 *
 * @param {object} formData - The form data to be sent with the request.
 * @param {string} finalUrl - The final URL to fetch the news data from.
 * @returns {Promise<Array>} - A promise that resolves to an array of fetched news articles.
 */
const fetchNewsOrg = async (formData, finalUrl) => {
  let fetchedData = []; // Define and initialize filteredData outside the try block
  try {
    const response = await axios.get(finalUrl);
    fetchedData = response.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return fetchedData;
};

/**
 * Fetches news data from a specific page of a news organization.
 *
 * @param {object} formData - The form data to be sent with the request.
 * @param {string} url - The base URL for fetching news data.
 * @param {number} pageNumber - The page number to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the fetched news data.
 */
export async function fetchNewsOrgPage(formData, url, pageNumber) {
  const newUrl = `${url}&page=${pageNumber}`; // Add page number and page size to the URL
  let fetchedData = await fetchNewsOrg(formData, newUrl);
  //console.log(newUrl); // used for debugging
  //console.log(fetchedData); // used for debugging
  return fetchedData;
}