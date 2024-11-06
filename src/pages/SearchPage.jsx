import CrossTopBar from "../components/CrossTopBar";
import KeywordSuggestion from "../components/KeywordSuggestion";
import SuggestionList from "../components/SuggestionList";

const SearchPage = () => {
  return (
    <div>
      <CrossTopBar/>
      <div className="px-5 md:px-[120px] md:mt-[88px]">
        <input
          type="text"
          className="text-[60px] md:text-[120px] mb-2 "
          placeholder="Cerca"
        />
        <div className="h-[6px] bg-gray-300 w-full md:hidden"></div>
        <KeywordSuggestion />
        <SuggestionList />
      </div>
    </div>
  );
};

export default SearchPage;
