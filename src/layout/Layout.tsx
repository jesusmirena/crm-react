import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <p>hola</p>

      <Outlet />
    </div>
  );
};

export default Layout;
