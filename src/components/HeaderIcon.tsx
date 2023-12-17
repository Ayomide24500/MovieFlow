import { FC } from "react";
import { iCon } from "../interface/interface";

export const Icon: FC<iCon> = ({ bg, icon, bg2, onClick }) => {
  return (
    <div>
      <div
        className={`text-[20px] cursor-pointer ${
          bg
            ? "text-[#414141] text-[20px] hover:bg-[#414141] hover:bg-transparent"
            : "bg-purple-200"
        } ${
          bg2
            ? "text-blue-400 bg-transparent mr-0 text-[20px] hover:text-white hover:bg-transparent"
            : "bg-black"
        } p-1 rounded-lg hover:text-white hover:bg-purple-700 duration-300 mr-2`}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
};
