import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const currentURL = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-indigo-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clients
        </h2>
        <nav>
          <Link
            className={`${
              currentURL === "/clients" ? "text-indigo-400" : "text-white"
            } text-2xl block mt-2 hover:text-indigo-300`}
            to="/clients"
          >
            Clients
          </Link>
          <Link
            className={`${
              currentURL === "/clients/new" ? "text-indigo-400" : "text-white"
            } text-2xl block mt-2 hover:text-indigo-300`}
            to="/clients/new"
          >
            New Client
          </Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
