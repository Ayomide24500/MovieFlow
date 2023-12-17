import { useEffect, useState } from "react";
import { getData } from "../../Api/api";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [state, setState]: any = useState({});

  useEffect(() => {
    getData().then((res) => {
      setState(res[3]);
    });
  }, []);

  useEffect(() => {
    getData().then((res: any) => {
      setState(res.find((el: any) => el.id === parseInt(id!)));
    });
  });
  return (
    <div>
      <div className="h-[600px] w-full relative">
        <img
          className="object-center w-full h-full"
          src={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-between"
          style={{ backgroundColor: "rgba(100, 100, 201, 0.5)" }}
        >
          <img
            className="w-[400px] h-full"
            src={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
          />
          <div className="w-[40%] h-full flex justify-center items-center text-2xl font-bold text-white mr-7">
            <h1>{state.overview}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
