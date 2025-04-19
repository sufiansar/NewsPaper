import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="w-[300px] py-4" src={logo} alt="" />
      <h1 className="text-[#706F6F] pb-4 ">
        Journalism Without Fear or Favour
      </h1>
      <p className="text-black">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
