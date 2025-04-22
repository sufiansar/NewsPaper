import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import Latest from "../Home/Latest";
import NavBar from "../Home/NavBar";
import LeftLayout from "../LayoutComponet/LeftLayout";
import RightLayout from "../LayoutComponet/RightLayout/RightLayout";
// import Home from "../Home/Home";

const RootLayout = () => {
  // const location = useLocation();
  // const isAuthPage = location.pathname.includes("/auth");
  return (
    <div className="container mx-auto bg-white">
      <Header />
      <section>
        <Latest />
      </section>
      <NavBar />
      <div className="grid grid-cols-12 gap-3 mx-10">
        <div className=" col-span-12  md:col-span-3">
          <LeftLayout />
        </div>
        <div className=" col-span-12 md:col-span-6">
          {/* {!isAuthPage && <Sidebar />} */}
          <Outlet />
        </div>
        <div className="right col-span-12 md:col-span-3">
          <RightLayout />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
