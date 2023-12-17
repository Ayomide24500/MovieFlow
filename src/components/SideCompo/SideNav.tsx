import { FC } from "react";
import { iSideNav } from "../../interface/interface";
import { Link } from "react-router-dom";

const SideNav: FC<iSideNav> = ({
  onClick,
  content,
  present,
  text,
  icon,
  destination,
}) => {
  const navElement = destination ? (
    <Link
      to={destination}
      className="w-[90%] py-3 transition-all duration-300 cursor-pointer hover:bg-purple-100 rounded-lg flex gap-5 hover:text-purple-600 items-center"
    >
      <div className="ml-4 text-[23px] font-bold">{icon}</div>
      <div>{text}</div>
      <div className="flex-1" />
      <div className="bg-pink-500">{present && present}</div>
    </Link>
  ) : (
    <div
      className="w-[90%] py-3 transition-all duration-300 cursor-pointer hover:bg-purple-100 rounded-lg flex gap-5 hover:text-purple-600 items-center"
      onClick={onClick}
    >
      <div className="ml-4 text-[23px] font-bold">{icon}</div>
      <div>{text}</div>
      <div className="flex-1" />
      <div className="bg-pink-500">{present && present}</div>
    </div>
  );
  return (
    <div>
      <div className="w-[220px]">
        <h3>{content ? content : ""}</h3>
        {navElement}
      </div>
    </div>
  );
};

export default SideNav;
