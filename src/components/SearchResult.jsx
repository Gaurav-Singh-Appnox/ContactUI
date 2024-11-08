import turtle from "../assets/productsImg/turtle.jpg";
import boat from "../assets/productsImg/boat.jpg";
import butterfly from "../assets/productsImg/butterfly.jpg";
import ring from "../assets/productsImg/ring.jpg";
import wallet from "../assets/productsImg/wallet.jpg";
import pendent from "../assets/productsImg/pendent.jpg";
import EyeIcon from "../assets/EyeIcon.svg";

const SearchResult = () => {
  return (
    <div className="">
      <p className="text-[40px] text-center md:text-[80px] font-dm-serif">
        Giorgio De Chirico
      </p>
      <div className="mt-5 mb-20 flex items-center justify-center gap-2 md:justify-start">
        <p className="text-2xl font-dm-serif">Risultati</p>
        <button className="text-xl w-[68px] h-11 rounded-full border-[1px]  border-gray-700">
          1.364
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-16 md:gap-10 font-inter">
        <div className=" relative shadow-custom-all ">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={turtle} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={boat} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={wallet} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={ring} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={pendent} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={butterfly} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className=" relative shadow-custom-all">
          <div className="absolute h-8 w-[89px] bg-[rgba(0,0,0,0.3)] text-white flex gap-2 items-center justify-center rounded-full top-[10px] left-[10px]">
            <img src={EyeIcon} alt="" className="text-white" />
            <p>1359</p>
          </div>
          <div>
            <img src={boat} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6 p-4">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div className="text-sm">
              <p>Asta</p>
              <p className="font-bold">Arte Moderna e Contemporanea</p>
              <p className="font-bold">Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
