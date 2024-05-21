import SearchForm from "./SearchForm" 
import {HomeContext} from "../Contexts/HomeContext"
import { useState } from "react"
import useFetchSources from "../hooks/useFetchSources";

function HomePage(){
    const [formData, setFormData] = useState({
        keyword: '',
        selectedOptions: [],
        sources: [],
        categories: '',
        startDate: '',
        endDate: '',
    })
    const { availableSources, sourceLoading, sourceError } = useFetchSources();
    const sourcesData = { availableSources, sourceLoading, sourceError };
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(true);
    
    return(
        <HomeContext.Provider value={{formData, setFormData, sourcesData, pageNumber, setPageNumber, hasMorePages, setHasMorePages}}>
            {<SearchForm />}
        </HomeContext.Provider>
    )
}
 
export default HomePage