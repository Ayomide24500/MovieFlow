import { IoMdEgg } from "react-icons/io";

const Growth = () => {
  return (
    <div>
      <div className="h-[600px] w-[100%] border">
        <div className="w-full h-[100px] flex justify-between items-center">
          <div className="h-[80px] sm:w-[140px] w-[20%] ml-4">
            <p className="text-gray-400">Total Growth</p>
            <h1 className="font-bold text-2xl">$2,324.00</h1>
          </div>
          <div className="sm:h-[80px] sm:w-[140px] w-[30%] mr-4 sm:flex sm:justify-around sm:items-center flex justify-around items-center border h-[60px] shadow-md">
            <h1 className="sm:font-bold sm:pl-4 sm:text-2xl">Today</h1>
            <IoMdEgg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
