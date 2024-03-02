import { IUrls } from '../interface';

const baseURL: string = "https://api.themoviedb.org/3";
const posterURL: string = 'https://image.tmdb.org/t/p/w200';

const urls: IUrls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/movie?query=',
    video: `/movie/{:movie_id}/videos`
};

export {
    baseURL,
    urls,
    posterURL
};
