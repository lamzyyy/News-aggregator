//Library Imports
import { useState, useEffect } from "react";
import axios from "axios";
/**
 * Custom hook to fetch news sources.
 * @returns {Object} An object containing availableSources, sourceLoading, and sourceError.
 */
const useFetchSources = () => {
    // State variables to store the fetched sources, loading state, and error state
    const [availableSources, setSources] = useState([]);
    const [sourceLoading, setIsLoading] = useState(false);
    const [sourceError, setError] = useState(null);
    const { VITE_API_KEY_1 } = import.meta.env;

    /**
     * Fetches the news sources from the API.
     */
    useEffect(() => {
        const fetchSources = async () => {
            setIsLoading(true);
            try {
                // Make a GET request to fetch the news sources
                const sourceResponse = await axios.get(
                    `https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${VITE_API_KEY_1}`
                );
                // Extract the necessary data from the response and format it
                const sources = sourceResponse.data.sources.map(source => ({
                    value: source.id,
                    label: source.name
                }));
                // Update the state variables with the fetched sources
                setSources(sources);
                setIsLoading(false);
            } catch (error) {
                // Handle any errors that occur during the fetch
                setError(error);
                setIsLoading(false);
                console.error("Error fetching data:", error);
            }
        };

        // Call the fetchSources function when the component mounts or when VITE_API_KEY_1 changes
        fetchSources();
    }, [VITE_API_KEY_1]);

    // Return the state variables for external use
    return { availableSources, sourceLoading, sourceError }
}

export default useFetchSources;