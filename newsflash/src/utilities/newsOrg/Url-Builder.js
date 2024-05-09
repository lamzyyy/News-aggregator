
 export const buildNewsOrgUrl = (formData) => {
    const { VITE_API_KEY_1 } = import.meta.env;
    const apiUrl = "https://newsapi.org/v2/top-headlines?language=en&";
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
    let finalUrl = `${apiUrl}q=${formData.keyword}`;
    if (queryParams.length > 0) {
        finalUrl += `&${queryParams.join("&")}`;
    }

    // Append API key
    finalUrl += `&apiKey=${VITE_API_KEY_1}`;
    console.log(finalUrl);
    return finalUrl;
}