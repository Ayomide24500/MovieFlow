import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { PiGraphLight } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Icon } from "./HeaderIcon";
import { useState } from "react";
import Sidebar from "./SideCompo/Sidebar";

const Header = () => {
  const [state, setState] = useState(false);

  const handleShowToggle = () => {
    setState(!state);
  };
  return (
    <div className="h-[70px] w-full border-b flex items-center justify-center relative">
      <div className="w-[100%] sm:flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex sm:w-[200px] items-center justify-between mr-2">
            <div className="text-[25px] font-bold pl-3 sm:block">Berry</div>
            <div className="sm:block block ml-4">
              <Icon icon={<IoMenuSharp />} onClick={handleShowToggle} />
            </div>
          </div>
          <div className="ml-3">
            <div className="hidden sm:flex items-center gap-2 border h-[45px] pl-2 rounded-md w-[500px]">
              <div>
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[90%] outline-none bg-transparent"
              />
              <Icon icon={<PiGraphLight />} />
            </div>
          </div>
        </div>

        <div className="sm:flex items-center mr-9 hidden">
          <Icon icon={<IoIosNotificationsOutline />} />
          <div
            className="sm:flex hidden items-center justify-between w-[90px] p-1 rounded-full min-h-[30px] duration-300 transition-all
           hover:bg-blue-500 bg-[lightgray] mr-6"
          >
            <img className="w-9 h-9 rounded-full border bg-green-500" />
            <Icon icon={<CiSettings />} bg2="l" />
          </div>
        </div>
      </div>
      {state ? (
        <div className="absolute left-2 top-14">
          <Sidebar />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
