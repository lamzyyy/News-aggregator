
 export const buildNewsOrgUrl = (formData) => {
    const { VITE_API_KEY_1 } = import.meta.env;
    const apiUrl = "https://newsapi.org/v2/everything?language=en&sortBy=popularity&";
    const categoryApiUrl = "https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&";
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
    let finalUrl;
    if (formData.categories.length){
        finalUrl= `${categoryApiUrl}q=${formData.keyword}`;
    }else if(formData.sources.length && !formData.categories.length){
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