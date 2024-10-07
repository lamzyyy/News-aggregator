// Local Imports
import SearchForm from "./SearchForm";
import { HomeProvider} from "../state/HomeContext";

// Define the HomePage component
/**
 * Renders the home page component.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
function HomePage() {
  return (
    <div className="bg-blue-150">
      {/* Wrap the SearchForm component with the HomeProvider */}
      <HomeProvider>
        <SearchForm />
      </HomeProvider>
    </div>
  );
}

// Export the HomePage component as the default export
export default HomePage;