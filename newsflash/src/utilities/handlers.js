// Library Imports
import { useContext } from "react";
import { HomeContext } from "../state/HomeContext";

/**
 * A utility function that contains various event handlers for form inputs.
 * @returns {Object} An object containing the event handler functions.
 */
const Handlers = () => {
    const { formData, setFormData } = useContext(HomeContext);

    /**
     * Handles the change event for the option input.
     * @param {Array} selectedOptions - The selected options.
     */
    const handleOptionChange = (selectedOptions) => {
        setFormData({ ...formData, selectedOptions });
    };

    /**
     * Handles the change event for the source input.
     * @param {Array} selectedOptions - The selected options.
     */
    const handleSourceChange = (selectedOptions) => {
        const sources = selectedOptions.map((option) => option.value);
        setFormData({ ...formData, sources });
    };

    /**
     * Handles the change event for the category input.
     * @param {Array} selectedOptions - The selected options.
     */
    const handleCategoryChange = (selectedOptions) => {
        if (selectedOptions === null) {
            return;
        }
        setFormData({ ...formData, categories: selectedOptions.value });
    };

    /**
     * Handles the change event for the start date input.
     * @param {Event} event - The change event object.
     */
    const handleStartDateChange = (event) => {
        setFormData({ ...formData, startDate: event.target.value });
    };

    /**
     * Handles the change event for the end date input.
     * @param {Event} event - The change event object.
     */
    const handleEndDateChange = (event) => {
        setFormData({ ...formData, endDate: event.target.value });
    };

    return {
        handleOptionChange,
        handleSourceChange,
        handleCategoryChange,
        handleStartDateChange,
        handleEndDateChange,
    };
};

export default Handlers;
