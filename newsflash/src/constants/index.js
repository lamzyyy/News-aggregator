
export const maximumPagesAllowed = 5;
export const maxPageSize = 100;
export const defaultPage = 1;

export const { VITE_API_KEY_1 } = import.meta.env;

export function isSourceSelected(selectedOptions) {
  return selectedOptions.value === 'sources';
}
/**
 * Checks if the selected category is 'categories'.
 * @param {Object} selectedOptions - The selected options object.
 * @returns {boolean} - Returns true if the selected category is 'categories', otherwise false.
 */
export function isCategorySelected(selectedOptions) {
    return selectedOptions.value === 'categories';
}
