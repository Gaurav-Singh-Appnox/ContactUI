import crossIcon from "../assets/Icons.svg";

const CrossTopBar = () => {
  return (
    <div className=" w-full min-h-[72px]  mt-[44px] md:mt-0 flex flex-row-reverse items-center   ">
      <img src={crossIcon} alt="" className="w-6 h-6 mr-5  " />
    </div>
  );
};

export default CrossTopBar;
