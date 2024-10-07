// Library Imports
import React, { createContext, useState } from 'react';
// Local Imports
import useFetchSources from '../hooks/useFetchSources'; 

/**
 * Context for the Home component.
 * @typedef {Object} HomeContext
 * @property {Object} formData - Form data state.
 * @property {Function} setFormData - Function to update form data state.
 * @property {Object} sourcesData - Sources data state.
 * @property {number} pageNumber - Current page number state.
 * @property {Function} setPageNumber - Function to update current page number state.
 * @property {boolean} hasMorePages - Flag indicating if there are more pages to load.
 * @property {Function} setHasMorePages - Function to update the flag indicating if there are more pages to load.
 */

/**
 * Provider component for the HomeContext.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {React.ReactNode} - Rendered component.
 */
function HomeProvider({ children }) {
    // State for form data
    const [formData, setFormData] = useState({
        keyword: '',
        selectedOptions: [],
        sources: [],
        categories: '',
        startDate: '',
        endDate: '',
    });

    // Fetch sources data using custom hook
    const { availableSources, sourceLoading, sourceError } = useFetchSources();
    const sourcesData = { availableSources, sourceLoading, sourceError };

    // State for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const [hasMorePages, setHasMorePages] = useState(true);

    return (
        // Provide the context values to the child components
        <HomeContext.Provider value={{ formData, setFormData, sourcesData, pageNumber, setPageNumber, hasMorePages, setHasMorePages }}>
            {children}
        </HomeContext.Provider>
    );
}

export { HomeProvider };
