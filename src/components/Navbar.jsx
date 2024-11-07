// Navbar.js
import searchIcon from "../assets/searchIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import loginIcon from "../assets/login.svg";
import crossIcon from "../assets/Icons.svg";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ searchBtn, onSearchClick }) => {
  return searchBtn ? (
    <div className="w-full min-h-[72px] mt-[44px] md:mt-0 flex flex-row-reverse items-center  ">
      <NavLink to={"/"}>
        {" "}
        <img
          src={crossIcon}
          alt="Close Search"
          className="w-6 h-6 mr-5"
          onClick={onSearchClick}
        />
      </NavLink>
    </div>
  ) : (
    <div className="flex justify-between p-5 border-b border-gray-300 font-inter">
      <p className="text-[28px] font-dm-serif">Mediartrade</p>
      <div className="flex gap-5 items-center">
        <div className="w-6 h-6 flex items-center justify-center md:hidden">
          <NavLink to={"/contactpage"}>
            <img className="w-5 h-[18px]" src={loginIcon} alt="Login" />
          </NavLink>
        </div>
        <div className="items-center gap-4 mr-4 hidden md:flex">
          <div>
            <p>Prossime Aste</p>
          </div>
          <div>
            <p>Private Sale</p>
          </div>
          <div>
            <p>Accedi</p>
          </div>
          <div className="relative">
            <select name="" id="" className="appearance-none">
              <option value="">IT</option>
            </select>
            <FaChevronDown className="size-3 absolute inset-y-0 -right-5 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="w-6 h-6 flex items-center justify-center">
          <img
            className="w-5 h-[18px]"
            src={searchIcon}
            alt="Search"
            onClick={onSearchClick} // Use passed-in function
          />
        </div>
        <div className="w-6 h-6 flex items-center justify-center md:hidden">
          <NavLink to={"/searchpage"}>
            <img
              className="w-5 h-[18px] cursor-pointer"
              src={menuIcon}
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
