// SearchResultPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchResult from "../components/SearchResult";
import Sidebar from "../components/Sidebar";
import VerticalLine from "../components/VerticalLine";

const SearchResultPage = () => {
  const [searchBtn, setSearchBtn] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearchBtn((prev) => !prev);
    navigate("/searchpage", { state: { searchBtn: !searchBtn } });
  };

  return (
    <div className="flex">
      <Sidebar />
      <VerticalLine />
      <div>
        <Navbar searchBtn={searchBtn} onSearchClick={handleSearchClick} />
        <div className="mt-[60px] px-5 md:px-16 md:mt-40">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
