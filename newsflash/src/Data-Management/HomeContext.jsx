// Library Imports
import React, { createContext, useState } from 'react';
// Local Imports
import useFetchSources from '../hooks/useFetchSources'; 

export const HomeContext = createContext({});

function HomeProvider({ children }) {
    const [formData, setFormData] = useState({
        keyword: '',
        selectedOptions: [],
        sources: [],
        categories: '',
        startDate: '',
        endDate: '',
    });

    const { availableSources, sourceLoading, sourceError } = useFetchSources();
    const sourcesData = { availableSources, sourceLoading, sourceError };

    const [pageNumber, setPageNumber] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(true);

    return (
        <HomeContext.Provider value={{ formData, setFormData, sourcesData, pageNumber, setPageNumber, hasMorePages, setHasMorePages }}>
            {children}
        </HomeContext.Provider>
    );
}
export { HomeProvider };
