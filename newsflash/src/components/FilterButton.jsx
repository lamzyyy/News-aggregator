import { useContext } from "react"
import { HomeContext } from "../Contexts/HomeContext"
import Select from "react-select"
import Handlers from "../utilities/handlers";
const FilterButton = () =>{
    const {formData, sourcesData} = useContext(HomeContext)
    const {handleCategoryChange, handleOptionChange, handleEndDateChange, handleSourceChange, handleStartDateChange } = Handlers() 
    
    const customStyles = {
        option: (provided) => ({
          ...provided,
          color: 'black'
        }),
    };

    return(
        <>
        <Select
          isMulti
          value={formData.selectedOptions}
          onChange={handleOptionChange}
          options={[
            { value: 'sources', label: 'Sources' },
            { value: 'categories', label: 'Categories' },
            { value: 'dates', label: 'Dates' }
          ]}
          styles={customStyles}
        />

        {formData.selectedOptions.some(option => option.value === 'sources') && (
          <div>
            <label htmlFor="source">Select sources:</label>
            <Select
              id="source"
              name="source"
              options={sourcesData.availableSources}
              isMulti
              hideSelectedOptions={false}
              onChange={handleSourceChange}
              styles={customStyles}
            />
          </div>
        )}

        {formData.selectedOptions.some(option => option.value === 'categories') && (
          <div>
            <label htmlFor="category">Select categories:</label>
            <Select
              id="category"
              name="category"
              options={[
                { value: "business", label: "Business" },
                { value: "entertainment", label: "Entertainment" },
                { value: "general", label: "General" },
                { value: "health", label: "Health" },
                { value: "science", label: "Science" },
                { value: "sports", label: "Sports" },
                { value: "technology", label: "Technology" }
              ]}
              hideSelectedOptions={false}
              onChange={handleCategoryChange}
              styles={customStyles}
            />
          </div>
        )}

        {formData.selectedOptions.some(option => option.value === 'dates') && (
          <div>
            <label htmlFor="startDate">From:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleStartDateChange}
            />
            <label htmlFor="endDate">To:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleEndDateChange}
            />
          </div>

        )}
    </>)
}
export default FilterButton