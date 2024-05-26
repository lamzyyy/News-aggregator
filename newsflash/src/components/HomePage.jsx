// Local Imports
import SearchForm from "./SearchForm";
import { HomeProvider } from "../Data-Management/HomeContext";

function HomePage() {
  return (
    <HomeProvider>
      <SearchForm />
    </HomeProvider>
  );
}

export default HomePage;