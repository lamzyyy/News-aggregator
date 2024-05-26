//Local Imports
import { VITE_API_KEY_1 } from "../constants";
//constants for this component
const apiUrl = "https://newsapi.org/v2/everything?language=en&sortBy=popularity&";
const categoryApiUrl = "https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&";
 
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
    
    // add apiUrl and things like that into the .env file to keep them secret so that they are not exposed to the public and that this code can be reused in other projects
    // add the .env file to the .gitignore file so that it is not pushed to github
    // have a look at different apis.

    // organisation 
    /**
     * changed context to states
     * have a constant folder so that things like formData.sources === source
     * same pagination (1 = minimum page, 5 = maximum page, 1 = default page)
     * try not to create constants in the middle of the code
     * move constants to the top of the file if theu are used in multiple places in the file
     * libraries should be imported at the top of the file and local files should be imported after libraries
     * linked in and style configuration 
     */


    // Add keyword and query parameters only if there are any query parameters
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
    if (queryParams.length > 0) {
        finalUrl += `&${queryParams.join("&")}`;
    }

    // Append API key
    finalUrl += `&apiKey=${VITE_API_KEY_1}`;
    console.log(finalUrl);
    return finalUrl;
}