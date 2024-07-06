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

    const [pageNumber, setPageNumber] = useState(0);
    const [hasMorePages, setHasMorePages] = useState(true);

    return (
        <HomeContext.Provider value={{ formData, setFormData, sourcesData, pageNumber, setPageNumber, hasMorePages, setHasMorePages }}>
            {children}
        </HomeContext.Provider>
    );
}
// hard to understand the code and context of the code, so we need to add comments to the code
// need to add default value to the parts of the code.
//
export { HomeProvider };
