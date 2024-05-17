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

    
    return(
        <HomeContext.Provider value={{formData, setFormData, sourcesData}}>
            {<SearchForm />}
        </HomeContext.Provider>
    )
}
 
export default HomePage