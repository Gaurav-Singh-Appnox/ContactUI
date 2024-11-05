import SearchResult from "../components/SearchResult";
import Sidebar from "../components/Sidebar";


const SearchResultPage = () => {
  return (
    <div className="flex">
        <Sidebar/>
    <div className="mt-[60px] px-5 md:px-16 md:mt-40">
      <SearchResult/>
    </div>
    </div>
  );
};

export default SearchResultPage;
