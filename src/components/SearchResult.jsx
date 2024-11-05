import turtle from "../assets/productsImg/turtle.jpg";
import boat from "../assets/productsImg/boat.jpg";
import butterfly from "../assets/productsImg/butterfly.jpg";
import ring from "../assets/productsImg/ring.jpg";
import wallet from "../assets/productsImg/wallet.jpg";
import pendent from "../assets/productsImg/pendent.jpg";

const SearchResult = () => {
  return (
    <div>
      <p className="text-[40px] text-center md:text-[80px]">
        Giorgio De Chirico
      </p>
      <div className="mt-5 mb-20 flex items-center justify-center gap-2 md:justify-start">
        <p className="text-2xl">Risultati</p>
        <button className="text-xl w-[68px] h-11 rounded-full border-[1px]  border-gray-700">
          1.364
        </button>
      </div>
      <div className="flex flex-wrap gap-16 md:gap-10">
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px]">
          <div>
            <img src={turtle} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px] ">
          <div>
            <img src={boat} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px] ">
          <div>
            <img src={wallet} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px] ">
          <div>
            <img src={ring} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px] ">
          <div>
            <img src={pendent} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px] ">
          <div>
            <img src={butterfly} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] max-h-[478px] md:max-w-[316px]">
          <div>
            <img src={boat} alt="" className="w-full" />
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <p>Spilla in argento e oro a forma di rana stilizzata.</p>
            <div>
              <p>Asta</p>
              <p>Arte Moderna e Contemporanea</p>
              <p>Milano, 21-22 Dicembre 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;