import axios from "axios";

//Base de url de endpoint
const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
//Token
export const setAuthToken = (token) => {
  spotifyApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default spotifyApi;
