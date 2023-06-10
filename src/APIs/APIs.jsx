import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3";
const api_key = "f5229290d979a73770de0da52d5e2a2e";

const fullURL =  BaseURL+"/trending/all/day?api_key="+api_key;
const getTrendingVideos = axios.get(fullURL);

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=f5229290d979a73770de0da52d5e2a2e';
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id);


export default {getTrendingVideos, getMovieByGenreId};