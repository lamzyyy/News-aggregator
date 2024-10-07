//Library Imports
import { useState, useContext, useEffect } from "react";

// Local Imports
import { HomeContext } from "../state/HomeContext";
import useResetOptions from "../hooks/useResetOptions";
import FilterButton from "./FilterButton";
import { buildNewsOrgUrl } from "../utilities/Url-Builder";
import { fetchNewsOrgPage } from "../utilities/api"
import { maximumPagesAllowed, maxPageSize, defaultPage} from "../constants";
import CardContainer from "./CardContainer";

/**
 * SearchForm component for searching news articles.
 * @returns {JSX.Element} The SearchForm component.
 */
function SearchForm() {
  useResetOptions();
  const { formData, setFormData, pageNumber, setPageNumber, hasMorePages, setHasMorePages } = useContext(HomeContext);
  const [news, setNews] = useState([]);
  const [finalUrl, setFinalUrl] = useState("");
  console.log(pageNumber)
  
  /**
   * Handles the next page button click event.
   * @returns {Promise<void>} A promise that resolves when the next page is loaded.
   */
  const handleNextPage = async () => {
    if (pageNumber < maximumPagesAllowed){
      setPageNumber(prevPageNumber => prevPageNumber + 1);
      const filteredNews = await fetchNewsOrgPage(formData, finalUrl, pageNumber + 1);
      setNews(filteredNews);
      // Check if there are more pages to fetch
      if (filteredNews.length < maxPageSize || pageNumber === maximumPagesAllowed) {
        setHasMorePages(false);
      }
    }
  };

  /**
   * Handles the previous page button click event.
   * @returns {Promise<void>} A promise that resolves when the previous page is loaded.
   */
  const handlePreviousPage = async () => {
    if (pageNumber > defaultPage) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
      const filteredNews = await fetchNewsOrgPage(formData, finalUrl, pageNumber - 1);
      setNews(filteredNews);
      setHasMorePages(true);
    }
  };

  useEffect(() => {
    setFinalUrl(buildNewsOrgUrl(formData));
  }, [formData]);

  /**
   * Handles the form submission event.
   * @param {Event} e - The form submission event.
   * @returns {Promise<void>} A promise that resolves when the form is submitted.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    let filteredNews = [];
    /* if (formData.categories.length && formData.sources.length) {
      filteredNews = await fetchAllNewsOrg(formData, finalUrl);
    }*/
    
    filteredNews = await fetchNewsOrgPage(formData, finalUrl, pageNumber);
    filteredNews = filteredNews.filter(item => item.content !== "[Removed]");
    setNews(filteredNews)
  };

  return (
    <div>
      {/* Search News */}
      <h1 className="mb-4 text-2xl">Search News</h1>
      <form onSubmit={handleSubmit}>
        {/* Keyword Input */}
        <label htmlFor="keyword">Keyword:</label>
        <input
          className="border-2 border-gray-500 rounded-md m-2 p-2 w-1/2"
          type="text"
          id="keyword"
          value={formData.keyword}
          onChange={(e) =>
            setFormData({ ...formData, keyword: e.target.value })
          }
          required
        />
        <div>
          {/* Search Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            type="submit"
            onClick={() => {
              setPageNumber(1);
              setHasMorePages(true);
            }}
          >
            Search
          </button>
          {/* Next Page Button */}
          {hasMorePages && pageNumber !== 0 && (
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleNextPage}
            >Next Page</button>
          )}
          {/* Previous Page Button */}
          {pageNumber !== defaultPage && pageNumber > defaultPage && (
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" 
            onClick={handlePreviousPage}>Previous Page</button>
          )}
        </div>
        <div>
          {/* Filter Button */}
          <FilterButton />
        </div>
      </form>
      {/* Card Container */}
      <CardContainer news={news} />
    </div>
  );
}

export default SearchForm;
