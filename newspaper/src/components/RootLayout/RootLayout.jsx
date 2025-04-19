import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import Latest from "../Home/Latest";
import NavBar from "../Home/NavBar";
import LeftLayout from "../LayoutComponet/LeftLayout";
import RightLayout from "../LayoutComponet/RightLayout/RightLayout";
// import Home from "../Home/Home";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section>
        <Latest />
      </section>
      <NavBar />
      <div className="grid grid-cols-12 gap-3">
        <div className="left col-span-3">
          <LeftLayout />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
        <div className="right col-span-3">
          <RightLayout />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
