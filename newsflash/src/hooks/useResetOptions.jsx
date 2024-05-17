import { HomeContext } from "../Contexts/HomeContext";
import { useContext, useEffect } from "react";
const useResetOptions = () => {
    const { formData, setFormData } = useContext(HomeContext);
  
    useEffect(() => {
      // Accumulate changes to formData
      const updatedFormData = { ...formData };
  
      // Reset sources if not selected
      if (!formData.selectedOptions.some(option => option.value === 'sources')) {
        updatedFormData.sources = [];
      }
  
      // Reset categories if not selected
      if (!formData.selectedOptions.some(option => option.value === 'categories')) {
        updatedFormData.categories = '';
      }
  
      // Reset dates if not selected
      if (!formData.selectedOptions.some(option => option.value === 'dates')) {
        updatedFormData.startDate = '';
        updatedFormData.endDate = '';
      }
  
      // Update formData with accumulated changes
      setFormData(updatedFormData);
  
    }, [formData.selectedOptions, setFormData]);
  };
  
  export default useResetOptions;
  