import searchIcon from "../assets/searchIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import loginIcon from "../assets/login.svg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 border-b border-gray-300 ">
      <p className="text-[28px]">Mediartrade</p>
      <div className="flex gap-5 items-center">
        <div className="w-6 h-6 flex items-center justify-center md:hidden ">
          <img className="w-5 h-[18px]" src={loginIcon} alt="" />
        </div>
        <div className=" items-center gap-4 mr-4 hidden md:flex">
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
            <select name="" id="" className=" appearance-none">
              <option value="">IT</option>
            </select>
            <FaChevronDown className=" size-3 absolute inset-y-0 -right-5 top-1/2 transform -translate-y-1/2  " />
          </div>
        </div>
        <div className="w-6 h-6 flex items-center justify-center ">
          <img className="w-5 h-[18px]" src={searchIcon} alt="" />
        </div>
        <div className="w-6 h-6  flex items-center justify-center md:hidden ">
          <img className="w-5 h-[18px]" src={menuIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
