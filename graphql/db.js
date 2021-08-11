import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";
//instead of database
export const getMovies = () => {
  const dataset = fetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
  console.log(dataset);
  return dataset;
}

export const goodMovies = (score) => {
  const datasets = fetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}