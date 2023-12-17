import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideCompo/Sidebar";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <div className="flex justify-end w-[100%]">
          <div className="w-full transition-all duration-300 md:w-[calc(100%-250px)] bg-purple-50 m-2 p-2 rounded-md  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
