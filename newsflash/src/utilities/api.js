// Library Imports
import axios from "axios";

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

export async function fetchNewsOrgPage(formData, url, pageNumber) {
  const newUrl = `${url}&page=${pageNumber}`; // Add page number and page size to the URL
  let fetchedData = await fetchNewsOrg(formData, newUrl);
  console.log(newUrl);
  console.log(fetchedData); 
  return fetchedData;
}
/*
export async function fetchAllNewsOrg(formData, url) {
  let results = [];
  let pageNumber = 1;
  let fetchedData;

  do {
    const newUrl = `${url}&page=${pageNumber}`; 
    fetchedData = await fetchNewsOrg(formData, newUrl);
    if (formData.sources.length > 0) {
      fetchedData = fetchedData.filter((article) =>
        formData.sources.includes(article.source.id),
      );
    }
    results = [...results, ...fetchedData];
    pageNumber++;
  } while (fetchedData.length > 0 && pageNumber <= 5); // Continue fetching while there are results

  console.log("Filtered data:", results);
  return results;
}
*/