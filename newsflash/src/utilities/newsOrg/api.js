import axios from "axios";
const fetchNewsOrg = async (formData, finalUrl) => {
  let filteredData = []; // Define and initialize filteredData outside the try block

  try {
    const response = await axios.get(finalUrl);
    filteredData = response.data.articles;
    console.log(filteredData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return filteredData;
};

export async function fetchAllNewsOrg(formData, url) {
  let results = [];
  let pageNumber = 1;
  let fetchedData;

  do {
    const newUrl = `${url}&page=${pageNumber}`; // Assuming the API uses 'page' query parameter for pagination
    fetchedData = await fetchNewsOrg(formData, newUrl);
    if (formData.sources.length > 0) {
      fetchedData = fetchedData.filter((article) =>
        formData.sources.includes(article.source.id),
      );
    }
    results = [...results, ...fetchedData];
    pageNumber++;
  } while (fetchedData.length > 0 && pageNumber <= 5); // Continue fetching while there are results

  console.log("Filtered data:", fetchedData);
  return results;
}