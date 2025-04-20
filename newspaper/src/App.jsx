// import { Outlet } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import AuthLayOut from "./components/Pages/AuthLayOut";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
