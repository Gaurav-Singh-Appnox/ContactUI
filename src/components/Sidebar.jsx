import loginBtn from "../assets/login.svg";
import TvIcon from "../assets/tv.svg";
import textIcon from "../assets/textsms.svg";
import helpIcon from "../assets/helpIcon.svg";
import collectionIcon from "../assets/collections.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:w-[5%] md:flex flex-col justify-between items-center my-3 h-screen  top-0 left-0 ">
      <div className="h-14 w-14 flex justify-center items-center">
        <NavLink to={"/contactpage"}>
          <img src={loginBtn} alt="" className="h-8 w-8" />
        </NavLink>
      </div>
      <div className="flex flex-col gap-10">
        <NavLink to={"/"}>
          <img src={collectionIcon} alt="" />
        </NavLink>
        <img src={TvIcon} alt="" />
        <img src={helpIcon} alt="" />
      </div>
      <div className="h-12 w-12 bg-black flex justify-center items-center rounded-full">
        <img src={textIcon} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
