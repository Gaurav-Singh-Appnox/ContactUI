import { Outlet } from "react-router-dom";
import MobileTopBar from "./components/MobileTopBar";

const App = () => {
  return (
    <div>
      <MobileTopBar />
      <Outlet />
    </div>
  );
};

export default App;
