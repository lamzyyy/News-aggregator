// Local Imports
import SearchForm from "./SearchForm";
import { HomeProvider } from "../state/HomeContext";

function HomePage() {
  return (
    <div className="bg-blue-150">
    <HomeProvider>
      <SearchForm />
    </HomeProvider>
    </div>
  );
}

export default HomePage;