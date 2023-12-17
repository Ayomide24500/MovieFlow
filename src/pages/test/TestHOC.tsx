import { useEffect, useState } from "react";
import { getData } from "../../Api/api";
import { Link } from "react-router-dom";

const TestHOC = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData().then((res: any) => {
      console.log("Data received:", res);
      setState(res);
    });
  }, []);
  return (
    <div className="w-full flex flex-wrap gap-32">
      {state &&
        state?.map((el: any) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            key={el.id}
          >
            <Link to={`/test/${el.id}`}>
              <div className=" rounded-md">
                {el.poster_path ? (
                  <img
                    className="min-h-[50px] rounded-t-md w-full"
                    src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                    alt={el.title}
                  />
                ) : (
                  <p>No poster available</p>
                )}
                <p className="text-[20px] mt-8 text-center font-bold leading-tight mb-2">
                  {el.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TestHOC;
