import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;

export const getMovies = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL);
  
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

/**export const getMovie = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL);
  let obj = {};
  const movie = movies.map(arg => {
    if (id === arg.id){
      
      obj = arg;
      console.log(obj)
      return arg;
    }
  });
  console.log(`Result: ${obj}`)
  return obj;
}; **/