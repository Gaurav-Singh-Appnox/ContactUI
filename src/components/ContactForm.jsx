import { FaChevronDown } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <div className="w-full  mt-12 md:mt-[80px] ">
        <h1 className="text-[40px] md:text-14 font-bold text-center font-dm-serif">
          Contattaci
        </h1>
      </div>
      <form className="mt-10 flex flex-col gap-4 font-inter">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            type="text"
            placeholder="Nome "
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
          />
          <input
            type="text"
            placeholder="Cognome"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
          />
        </div>
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
          />
          <input
            type="tel"
            placeholder="Telophono"
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
          />
        </div>
        <div className="relative">
          <select
            name=""
            id=""
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 appearance-none w-full pr-10"
          >
            <option value="">Richiesta Valutazione</option>
          </select>
          <FaChevronDown className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <textarea
          name=""
          rows={6}
          id=""
          className="px-4  py-3 text-sm rounded-lg bg-zinc-100 resize-none "
          placeholder="Come possiamo aiutarla?"
        ></textarea>
        <div className="flex items-center justify-center px-4 py-3 text-sm text-gray-500 rounded-lg bg-zinc-100 border-2 border-dashed border-gray-300 min-h-[100px] cursor-pointer">
          Carica Immagini
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
          />
        </div>
        <button className="px-4  py-3 text-sm rounded-full bg-black text-white">
          Invia Messaggio
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
