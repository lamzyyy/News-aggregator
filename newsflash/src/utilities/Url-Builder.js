//Local Imports
import { VITE_API_KEY_1 } from "../constants";
//constants for this component
const apiUrl = "https://newsapi.org/v2/everything?language=en&sortBy=popularity&";
const categoryApiUrl = "https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&";
 
/**
 * Builds the URL for fetching news articles based on the provided form data.
 * @param {Object} formData - The form data containing the search parameters.
 * @returns {string} - The final URL for fetching news articles.
 */
export const buildNewsOrgUrl = (formData) => {
    const queryParams = [];

    if (formData.categories.length !== 0) {
        queryParams.push(`category=${formData.categories}`);
    }
    if (formData.startDate) {
        queryParams.push(`from=${formData.startDate}`);
    }
    if (formData.endDate) {
        queryParams.push(`to=${formData.endDate}`);
    }
    
    // Add keyword and query parameters only if there are any query parameters
    // Build the initial URL based on the form data
    let finalUrl;
    if (formData.categories.length){
        finalUrl= `${categoryApiUrl}q=${formData.keyword}`;
    }
    else if(formData.sources.length && !formData.categories.length){
        finalUrl= `${apiUrl}q=${formData.keyword}&sources=${formData.sources.join(",")}`;
    }
    else{
        finalUrl= `${apiUrl}q=${formData.keyword}`;  
    }
    
    // Add query parameters to the URL if there are any
    if (queryParams.length > 0) {
        finalUrl += `&${queryParams.join("&")}`;
    }
    
    // Append the API key to the URL
    finalUrl += `&apiKey=${VITE_API_KEY_1}`;
    
    // Log the final URL for debugging purposes
    //console.log(finalUrl); // used for debugging
    
    // Return the final URL
    return finalUrl;

}