// Library Imports
import { useContext, useEffect } from "react";
// Local Imports
import { HomeContext } from "../state/HomeContext";
import { isSourceSelected, isCategorySelected } from "../constants/index";

const useResetOptions = () => {
    const { formData, setFormData} = useContext(HomeContext);
     
    useEffect(() => {
      // Accumulate changes to formData
      const updatedFormData = { ...formData };
  
      // Reset sources if not selected
      if (!isSourceSelected(formData.selectedOptions)) {
        updatedFormData.sources = [];
      
      }
  
      // Reset categories if not selected
      if  (!isCategorySelected(formData.selectedOptions)) {
        updatedFormData.categories = '';
      }
  
      // Reset dates if not selected
      if  (!formData.startDate) {
        updatedFormData.startDate = '';
      }
      if  (!formData.endDate) {
        updatedFormData.endDate = '';
      }
  
      // Update formData with accumulated changes
      setFormData(updatedFormData);
  
    }, [formData.selectedOptions, setFormData]);
  };
  
  export default useResetOptions;
  