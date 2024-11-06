import searchIcon from "../assets/searchIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import loginIcon from "../assets/login.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 border-b border-black ">
      <p className="text-[28px]">Mediartrade</p>
      <div className="flex gap-5 items-center">
        <div className="w-6 h-6 flex items-center justify-center ">
          <img className="w-5 h-[18px]" src={loginIcon} alt="" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center ">
          <img className="w-5 h-[18px]" src={searchIcon} alt="" />
        </div>
        <div className="w-6 h-6  flex items-center justify-center">
          <img className="w-5 h-[18px]" src={menuIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
