import { FaChevronDown } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup.string().required("Please provide your first name."),
    lastName: yup.string().required("Last name is required."),
    email: yup.string().email("Invalid email").required("Email is required."),
    tel: yup.number().required("Telephone number is required."),
  })
  .required();

const ContactForm = () => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    navigate("/contactconfirmed");
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...images]);
  };

  const removeImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="w-full mt-12 md:mt-[80px]">
        <h1 className="text-[40px] md:text-14 font-bold text-center font-dm-serif">
          Contattaci
        </h1>
      </div>
      <form
        className="mt-10 flex flex-col gap-4 font-inter"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col w-full">
            <input
              {...register("firstName")}
              type="text"
              placeholder="Nome"
              className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            />
            {errors && (
              <p className="text-red-500 pl-2">
                {errors.firstName?.message ?? ""}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              {...register("lastName")}
              type="text"
              placeholder="Cognome"
              className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            />
            {errors && (
              <p className="text-red-500 pl-2">
                {errors.lastName?.message ?? ""}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <div className="flex flex-col w-full">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            />
            {errors && (
              <p className="text-red-500 pl-2">{errors.email?.message ?? ""}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              {...register("tel")}
              type="tel"
              placeholder="Telefono"
              className="px-4 py-3 text-sm rounded-lg bg-zinc-100 md:w-full"
            />
            {errors && (
              <p className="text-red-500 pl-2">{errors.tel?.message ?? ""}</p>
            )}
          </div>
        </div>
        <div className="relative">
          <select
            {...register("select")}
            className="px-4 py-3 text-sm rounded-lg bg-zinc-100 appearance-none w-full pr-10"
          >
            <option value="">Richiesta Valutazione</option>
          </select>
          <FaChevronDown className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <textarea
          {...register("text")}
          rows={6}
          className="px-4 py-3 text-sm rounded-lg bg-zinc-100 resize-none"
          placeholder="Come possiamo aiutarla?"
        ></textarea>

        <div
          className={`flex gap-4 ${
            uploadedImages.length === 0 ? "w-full" : "flex-wrap"
          }`}
        >
          <label
            className={`${
              uploadedImages.length === 0
                ? "w-full h-[90px]"
                : "w-[90px] h-[90px]"
            } flex items-center justify-center text-5xl font-thin text-gray-500 rounded-lg bg-zinc-100 border-2 border-dashed border-gray-300 cursor-pointer`}
          >
            +
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
          </label>
          {uploadedImages.map((img, index) => (
            <div
              key={index}
              className="relative w-[90px] h-[90px] rounded-lg overflow-hidden group"
            >
              <img
                src={img}
                alt="Uploaded"
                className="w-[90px] h-[90px] object-cover"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => removeImage(index)}
              >
                <MdDeleteOutline className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        <button
          className="px-4 py-3 text-sm rounded-full bg-black text-white mt-4"
          type="submit"
        >
          Invia Messaggio
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
