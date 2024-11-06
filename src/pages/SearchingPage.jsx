import KeywordSuggestion from "../components/KeywordSuggestion";
import CrossTopBar from "../components/CrossTopBar";
import SuggestionList from "../components/SuggestionList";

const SearchinghtPage = () => {
  return (
    <div>
      <CrossTopBar />
      <div className="px-5 md:px-[120px] md:mt-[88px] font-inter">
        <p className="text-[60px] md:text-[120px] mb-2 ">Giorgio De Ch</p>
        <div className="h-[6px] bg-gray-300 w-full md:hidden"></div>
        <KeywordSuggestion />
        <SuggestionList />
      </div>
    </div>
  );
};

export default SearchinghtPage;
