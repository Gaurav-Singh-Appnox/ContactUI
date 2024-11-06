import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-12 flex gap-6  justify-evenly font-dm-serif flex-wrap">
      <NavLink
        className="h-14  p-4 rounded-md bg-gray-300 "
        to={"/contactpage"}
      >
        ContactPage
      </NavLink>
      <NavLink
        className="h-14  p-4 rounded-md bg-gray-300 "
        to={"/contactconfirmed"}
      >
        ContactConfirmedPage
      </NavLink>
      <NavLink
        className="h-14  p-4 rounded-md bg-gray-300 "
        to={"/contactfilled"}
      >
        ContactMenuFilledPage
      </NavLink>
      <NavLink className="h-14  p-4 rounded-md bg-gray-300 " to={"/searchpage"}>
        SearchPage
      </NavLink>
      <NavLink
        className="h-14  p-4 rounded-md bg-gray-300 "
        to={"/searchingpage"}
      >
        SearchingPage
      </NavLink>
      <NavLink
        className="h-14  p-4 rounded-md bg-gray-300 "
        to={"/searchresultpage"}
      >
        SearchResultPage
      </NavLink>
    </div>
  );
};

export default HomePage;
