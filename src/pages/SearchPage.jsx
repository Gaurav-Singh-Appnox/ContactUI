// SearchPage.js
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import KeywordSuggestion from "../components/KeywordSuggestion";
import SuggestionList from "../components/SuggestionList";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialSearchBtn = location.state?.searchBtn || false;
  const [searchBtn, setSearchBtn] = useState(initialSearchBtn);

  const handleSearchClick = () => {
    setSearchBtn((prev) => !prev);
    if (!searchBtn) navigate("/");
  };

  return (
    <div>
      <Navbar searchBtn={searchBtn} onSearchClick={handleSearchClick} />
      <div className="px-5 md:px-[120px] md:mt-[88px]">
        <input
          type="text"
          className="text-[60px] md:text-[120px] mb-2"
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
