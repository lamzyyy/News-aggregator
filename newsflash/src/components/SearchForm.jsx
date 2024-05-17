import { useState, useContext, useEffect } from "react";
import { HomeContext } from "../Contexts/HomeContext";
import useResetOptions from "../hooks/useResetOptions";
import FilterButton from "./FilterButton";
import { buildNewsOrgUrl } from "../utilities/newsOrg/Url-Builder";
import { fetchAllNewsOrg } from "../utilities/newsOrg/api"

function SearchForm() {
  useResetOptions();
  const { formData, setFormData } = useContext(HomeContext);
  const [news, setNews] = useState([]);
  const [finalUrl, setFinalUrl] = useState("");
  
  useEffect(() => {
    setFinalUrl(buildNewsOrgUrl(formData));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredNews = await fetchAllNewsOrg(formData, finalUrl)
    console.log(finalUrl)
    setNews(filteredNews)
  };

  return (
    <div>
      <h1>Search News</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={formData.keyword}
          onChange={(e) =>
            setFormData({ ...formData, keyword: e.target.value })
          }
          required
        />
        <div>
          <button type="submit">Search</button>
        </div>
        <div>
          <FilterButton />
        </div>
      </form>

      <div>
        {news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
