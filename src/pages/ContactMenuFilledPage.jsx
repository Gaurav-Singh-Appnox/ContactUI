import ContactFormFilled from "../components/ContactFormFilled";
import ContactMedia from "../components/ContactMedia";
import Sidebar from "../components/Sidebar";
import VerticalLine from "../components/VerticalLine";

const ContactMenuFilledPage = () => {
    return (
        <div className="w-full md:flex">
          <Sidebar />
          <VerticalLine />
          <div className="px-5 md:px-[102px] md:w-[65%]">
            <ContactFormFilled />
          </div>
          <VerticalLine />
          <ContactMedia />
        </div>
      );
};

export default ContactMenuFilledPage;
