import ContactForm from "../components/ContactForm";
import ContactMedia from "../components/ContactMedia";
import Sidebar from "../components/Sidebar";
import VerticalLine from "../components/VerticalLine";

const ContactPage = () => {
  return (
    <div className="w-full md:flex">
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
