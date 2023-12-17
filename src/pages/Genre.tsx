import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataByGenre } from "../Api/api";

const Genre = ({ iD }: any) => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getDataByGenre(iD).then((res: any) => {
      console.log("Data received:", res);
      setState(res);
      setIsLoaded(true);
    });
  }, [iD]);

  return (
    <div
      className={`w-full flex flex-wrap gap-32 ${
        isLoaded
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-500 ease-in-out"
      }`}
    >
      {state.map((genreWithMovie: any) => (
        <div
          className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          key={genreWithMovie.id}
        >
          <Link to={`/genre/${genreWithMovie.id}`}>
            <div className=" rounded-md">
              {genreWithMovie && genreWithMovie.poster_path ? (
                <img
                  className="min-h-[50px] rounded-t-md w-full"
                  src={`https://image.tmdb.org/t/p/w500/${genreWithMovie.poster_path}`}
                  alt={genreWithMovie.title}
                />
              ) : (
                <p>No poster available</p>
              )}
              <p className="text-[20px] mt-8 text-center font-bold leading-tight mb-2">
                {genreWithMovie.title}
              </p>
              <h1>{genreWithMovie.title}</h1>
              <p>{genreWithMovie.overview}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Genre;
