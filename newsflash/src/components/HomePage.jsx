// Local Imports
import SearchForm from "./SearchForm";
import { HomeProvider } from "../state/HomeContext";

function HomePage() {
  return (
    <HomeProvider>
      <SearchForm />
    </HomeProvider>
  );
}

export default HomePage;