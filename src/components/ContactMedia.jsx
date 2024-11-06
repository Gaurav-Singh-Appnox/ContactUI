import WhatsappIcon from "../assets/Vector.svg";
import ThreadIcon from "../assets/Thread.svg";


const ContactMedia = () => {
  return (
    <div className="mt-16 font-inter ">
     <div className="h-[1px] bg-gray-300 w-full md:hidden"></div>
      <div className="px-20 py-16 ">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-14 h-14 flex justify-center items-center border-2 rounded-full p-3">
            <img src={WhatsappIcon} alt="" className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-center">Preferisci usare WhatsApp?</p>
            <p className="text-lg text-center font-bold">+39 331 9467237</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 w-full"></div>
      <div className="px-20 py-16 ">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-14 h-14 flex justify-center items-center border-2 rounded-full p-3">
            <img src={ThreadIcon} alt="" className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-center">Preferisci usare WhatsApp?</p>
            <p className="text-lg text-center font-bold">
              info@mediartrade.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMedia;
