import ContactForm from "../components/ContactForm";
import ContactMedia from "../components/ContactMedia";
import Sidebar from "../components/Sidebar";
import VerticalLine from "../components/VerticalLine";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactPage = () => {
  const navigate = useNavigate();
  const [searchBtn, setSearchBtn] = useState(true);

  const handleSearchClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full md:flex">
      <div className="block md:hidden">
        <Navbar searchBtn={searchBtn} onSearchClick={handleSearchClick} />
      </div>

      <Sidebar />
      <VerticalLine />
      <div className="px-5 md:px-[102px] md:w-[65%]">
        <ContactForm />
      </div>
      <VerticalLine />
      <ContactMedia />
    </div>
  );
};

export default ContactPage;
