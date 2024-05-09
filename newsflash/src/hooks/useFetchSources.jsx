import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSources = () => {
    const [availableSources, setSources] = useState([]);
    const [sourceLoading, setIsLoading] = useState(false);
    const [sourceError, setError] = useState(null);
    const { VITE_API_KEY_1 } = import.meta.env;

    useEffect(() => {
        const fetchSources = async () => {
            setIsLoading(true);
            try {
                const sourceResponse = await axios.get(
                    `https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${VITE_API_KEY_1}`
                );
                const sources = sourceResponse.data.sources.map(source => ({
                    value: source.id,
                    label: source.name
                }));
                setSources(sources);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
                console.error("Error fetching data:", error);
            }
        };

        fetchSources();
    }, [VITE_API_KEY_1]);

    return { availableSources, sourceLoading, sourceError }
}

export default useFetchSources;