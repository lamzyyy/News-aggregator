// Library Imports
import { useContext } from "react";
import { HomeContext } from "../state/HomeContext";

const Handlers = () => {
    const { formData, setFormData,} = useContext(HomeContext);

    const handleOptionChange = (selectedOptions) => {
        setFormData({ ...formData, selectedOptions });
    };

    const handleSourceChange = (selectedOptions) => {
        const sources = selectedOptions.map(option => option.value);
        setFormData({ ...formData, sources });
    };

    const handleCategoryChange = (selectedOptions) => {
        if (selectedOptions === null) {
            return;
        }
        setFormData({ ...formData, categories: selectedOptions.value});

    };

    const handleStartDateChange = (event) => {
        setFormData({ ...formData, startDate: event.target.value });
    };

    const handleEndDateChange = (event) => {
        setFormData({ ...formData, endDate: event.target.value });
    };
    return {
        handleOptionChange,
        handleSourceChange,
        handleCategoryChange,
        handleStartDateChange,
        handleEndDateChange
    };
};

export default Handlers;
