import { FC } from "react";
import { LuWallet } from "react-icons/lu";
import { PiDotsThreeBold } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import { iUp } from "../interface/interface";
const Box: FC<iUp> = ({ bg, onClick }) => {
  return (
    <div className="bg-[#5e35b1] border text-white rounded-md p-4 relative">
      <div
        className={`absolute sm:h-[70px] sm:w-[110px] ${
          bg ? "bg-[#220d61]" : "bg-[#4527a0]"
        } bg-transparent right-14 top-0`}
        style={{ borderBottomLeftRadius: "90%" }}
      ></div>
      <div
        className="absolute sm:h-[100px] sm:w-[100px] bg-[#4c2796] right-0 top-0"
        style={{ borderBottomLeftRadius: "90%" }}
      ></div>
      <div className="w-[100%] h-[50px] flex justify-between items-center relative">
        <div className="h-[40px] w-12 bg-[#4527a0] flex justify-center items-center text-white text-2xl">
          <LuWallet />
        </div>
        <div className="h-[40px] w-12 bg-[#5b3bbd] flex justify-center items-center text-2xl">
          <PiDotsThreeBold onClick={onClick} />
        </div>
      </div>
      <div className="relative">
        <h1 className="pt-5 font-bold sm:text-4xl">$500.00</h1>
        <div
          className="h-6 w-6 bg-gray-400 absolute left-36 bottom-9 flex justify-center items-center text-white"
          style={{ borderRadius: "100%" }}
        >
          <MdArrowOutward />
        </div>
        <p className="text-gray-300 sm:text-xl pt-3">Total Earning</p>
      </div>
    </div>
  );
};
export const Box1: FC<iUp> = ({ bg, onClick }) => {
  return (
    <div className="h-[250px] bg-blue-500 border text-white rounded-md p-4 relative">
      <div
        className={`absolute sm:h-[70px] sm:w-[110px] ${
          bg ? "bg-[#7652e2]" : "bg-[#724aec]"
        } bg-transparent right-14 top-0`}
        style={{ borderBottomLeftRadius: "90%" }}
      ></div>
      <div
        className="absolute sm:h-[100px] sm:w-[100px] bg-[#7541df] right-0 top-0"
        style={{ borderBottomLeftRadius: "90%" }}
      ></div>
      <div className="w-[100%] h-[50px] sm:flex sm:justify-between sm:items-center relative">
        <div className="sm:h-[40px] sm:w-12 sm:bg-[#4527a0] sm:flex sm:justify-center sm:items-center text-white text-2xl">
          <LuWallet />
        </div>
        <div className="sm:flex sm:justify-between sm:items-center gap-4">
          <div className="sm:bg-[#5b3bbd] sm:flex sm:justify-center sm:items-center sm:font-bold p-3">
            <p>Free</p>
          </div>
          <div className="sm:flex sm:justify-center sm:items-center sm:font-bold p-3 hidden">
            <p>Month</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <h1 className="pt-5 font-bold sm:text-4xl">$500.00</h1>
        <div
          className="h-6 w-6 bg-gray-400 absolute left-36 bottom-9 flex justify-center items-center text-white"
          style={{ borderRadius: "100%" }}
        >
          <MdArrowOutward />
        </div>
        <p className="text-gray-300 sm:text-xl pt-3 sm:text-bold">
          Total Order
        </p>
      </div>
    </div>
  );
};

export default Box;
