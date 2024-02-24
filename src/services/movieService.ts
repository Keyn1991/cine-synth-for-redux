import { axiosService } from "./axiosService";

import {urls} from "../configs";

const movieService = {
    getAllMovies: (page: number = 1) => axiosService.get(`${urls.movies}?page=${page}`),
    getOneMovie: (id: string) => axiosService.get(`${urls.movie}/${id}`),
    movieSearch: (movie: string) => axiosService.get(`${urls.search}${movie}`),
    getGenreID: (genreID: string, page: number = 1) => axiosService.get(urls.movies, { params: { page, with_genres: genreID } }),
    getMovieTrailers: (id: string) => axiosService.get(`${urls.movie}/${id}/videos`),
};

export { movieService };
