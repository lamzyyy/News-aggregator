import axios from "axios";
export const fetchNewsOrg = async (formData, finalUrl) => {
  let filteredData = []; // Define and initialize filteredData outside the try block

  try {
    const response = await axios.get(finalUrl);
    filteredData = response.data.articles;
    if (formData.sources.length > 0) {
      filteredData = filteredData.filter((article) =>
        formData.sources.includes(article.source.id),
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return filteredData;
};
