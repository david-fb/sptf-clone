import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setAuthToken = (token) => {
  spotifyApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default spotifyApi;
