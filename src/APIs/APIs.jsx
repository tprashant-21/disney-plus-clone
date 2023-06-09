import axios from "axios"

const BaseURL = "https://api.themoviedb.org/3"
const api_key = "f5229290d979a73770de0da52d5e2a2e"

// BaseURL+"/trending/all/day?api_key"+api_key
const getTrendingVideos = axios.get("https://api.themoviedb.org/3/movie/11?api_key=f5229290d979a73770de0da52d5e2a2e")

export default getTrendingVideos