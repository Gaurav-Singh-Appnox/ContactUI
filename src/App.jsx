import { Outlet } from "react-router-dom";
// import MobileTopBar from "./components/MobileTopBar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VerticalLine from "./components/VerticalLine";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <VerticalLine />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
