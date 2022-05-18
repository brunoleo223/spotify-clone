import SpotifyWebApi from "spotify-web-api-node";

const scope = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recentely-played",
    "user-follow-read"
].join(',');

const params = {
    scope
}

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://https://accounts.spotity.com/authorize?${queryParamString.toString()}`; 

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

export default spotifyApi;

export { LOGIN_URL }