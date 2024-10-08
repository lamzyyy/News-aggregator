//Library Imports
import { useContext } from "react"
import { HomeContext } from "../state/HomeContext"
import Select from "react-select"
import { useMediaQuery } from 'react-responsive';

// Local Imports
import {isSourceSelected, isCategorySelected} from "../constants/index"
import Handlers from "../utilities/handlers";

/**
 * A component that renders a filter button with select components for choosing filters, selecting sources and categories, and date inputs for selecting start and end dates.
 *
 * @component
 * @example
 * return (
 *   <FilterButton />
 * )
 */
const FilterButton = () =>{
  // Accessing data from the HomeContext
  const {formData, sourcesData} = useContext(HomeContext)

  // Destructuring the handlers from the Handlers utility
  const {handleCategoryChange, handleOptionChange, handleEndDateChange, handleSourceChange, handleStartDateChange } = Handlers() 

  // Checking if the screen is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Setting the width of the Select component based on the screen size
  const number = isMobile ? '100%' : '50%';

  // Custom styles for the Select component
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: 'black'
    }),
    control: (provided) => ({
      ...provided,
      width: number, 
      margin: '0 auto',
    }),
  };

  return (
    <>
      {/* Select component for choosing a filter */}
      <Select
        value={formData.selectedOptions}
        onChange={handleOptionChange}
        options={[
          { value: 'None', label: 'Choose A Filter' },
          { value: 'sources', label: 'Sources' },
          { value: 'categories', label: 'Categories' },
        ]}
        styles={customStyles}
      />

      {/* Select component for selecting sources */}
      {isSourceSelected(formData.selectedOptions) && (
        <div>
          <label htmlFor="source">Select sources:</label>
          <Select
            id="source"
            name="source"
            options={sourcesData.availableSources}
            isMulti
            hideSelectedOptions={false}
            onChange={handleSourceChange}
            placeholder="Select sources"
            styles={customStyles}
          />
        </div>
      )}

      {/* Select component for selecting categories */}
      {isCategorySelected(formData.selectedOptions) && (
        <div>
          <label htmlFor="category">Select categories:</label>
          <Select
            id="category"
            name="category"
            options={[
              { value: 'business', label: 'Business' },
              { value: 'entertainment', label: 'Entertainment' },
              { value: 'general', label: 'General' },
              { value: 'health', label: 'Health' },
              { value: 'science', label: 'Science' },
              { value: 'sports', label: 'Sports' },
              { value: 'technology', label: 'Technology' },
            ]}
            hideSelectedOptions={false}
            isClearable={true}
            placeholder="Select categories"
            onChange={handleCategoryChange}
            styles={customStyles}
          />
        </div>
      )}

      {/* Date inputs for selecting start and end dates */}
      <div className="flex justify-center mb-2">
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-2 md:space-x-4">
          <label htmlFor="startDate">From:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleStartDateChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label htmlFor="endDate">To:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleEndDateChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>
    </>
  );
}

export default FilterButton