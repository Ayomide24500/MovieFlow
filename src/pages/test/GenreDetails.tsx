// Inside MovieDetail component
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataByID } from "../../Api/api";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<any | null>(null);

  useEffect(() => {
    getDataByID(id) // Pass the ID to the API call
      .then((res) => {
        console.log("Movie data:", res);
        setMovieData(res);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [id]); // Add id as a dependency

  if (!movieData) {
    return (
      <div className="bg-gray-600 bg-transparent h-screen w-full flex justify-center items-center text-2xl text-white">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-70"
        style={{ zIndex: 1 }}
      >
        <div className="h-screen w-full flex justify-center items-center">
          <div className="h-[600px] w-[100%] flex justify-around items-center text-white font-bold">
            <div className="h-[500px] w-[40%] ml-11">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                alt={movieData.title}
                className="h-[500px]"
              />
            </div>
            <div className="h-[500px] w-[60%] flex justify-center items-center gap-9">
              <h1 className="text-4xl font-bold mb-4">{movieData.title}</h1>
              <p className="text-lg">{movieData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
