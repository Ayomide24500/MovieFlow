import axios, { AxiosResponse } from "axios";
const URL: string =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";

const genreDataURL: string =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d88de48e71620e259bfbed33480fef5&with_genres=";

const genreURL: string =
  "https://api.themoviedb.org/3/movie/103?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";
export const getData = async () => {
  try {
    return await axios.get(URL).then((res: any) => {
      return res?.data?.results;
    });
  } catch (error) {
    return error;
  }
};
export const getDataByGenre = async (ID: string) => {
  return await axios
    .get(`${genreDataURL}${ID}`)
    .then((res: AxiosResponse<any, any>) => {
      return res.data?.results;
    });
};

export const getGenre = async (ID: any) => {
  return await axios
    .get(`${genreURL}${ID}`)
    .then((res: AxiosResponse<any, any>) => {
      return res.data?.genres;
    });
};

// export const getDataByID = async () => {
//   return await axios.get(URL).then((res: AxiosResponse<any, any>) => {
//     return res?.data?.results;
//   });
// };
export const getDataByID = async (id: any) => {
  const detailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US`;

  return await axios.get(detailURL).then((res: AxiosResponse<any, any>) => {
    return res?.data;
  });
};

// export const getOneByID = async (ID: string) => {
//   return await axios
//     .get(
//       https://api.themoviedb.org/3/movie/${ID}?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US"
//     )
//     .then((res: AxiosResponse<any, any>) => {
//       return res.data;
//     });
// };
