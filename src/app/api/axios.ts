import axios from "axios";

export const apiMovies = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    params: {
        type: 'movie',
        r: 'json'
    }
})


export const apiHouses = axios.create({
    baseURL: 'https://hp-api.onrender.com/api/'
})

