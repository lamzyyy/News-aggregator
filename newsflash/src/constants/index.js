export const maximumPagesAllowed = 5;
export const maxPageSize = 100;
export const defaultPage = 1;

export const { VITE_API_KEY_1 } = import.meta.env;

export function isSourceSelected(selectedOptions) {
  return selectedOptions.value === 'sources';
}
export function isCategorySelected(selectedOptions) {
    return selectedOptions.value === 'categories';
}
