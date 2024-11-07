import Sidebar from "../components/Sidebar";
import checkIcon from "../assets/checkIcon.svg";
import VerticalLine from "../components/VerticalLine";
// import CrossTopBar from "../components/CrossTopBar";

const ContactConfirmedPage = () => {
  return (
    <div>
      {/* <CrossTopBar /> */}
      <div className="flex">
        <Sidebar />
        <VerticalLine />

        <div className="flex-1 flex justify-center items-center  px-5 font-inter ">
          <div className="flex flex-col items-center gap-10 md:gap-12">
            <div className="w-14 h-14 rounded-full p-3 border-[2px] border-gray-300">
              <img src={checkIcon} alt="" />
            </div>
            <div className="flex flex-col gap-8 ">
              <p className="text-[40px] text-center md:text-[56px] font-dm-serif">
                Messaggio inviato
              </p>
              <p className="font-medium text-sm text-center md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at risus mauris.
              </p>
            </div>
            <div className="w-[120px] h-14 flex justify-center items-center border-2 border-black rounded-full ">
              <button className="w-14 h-7 font-semibold">Chiudi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactConfirmedPage;
