export interface IMovie {
    id: string
    title: string;
    overview: string;
    poster_path: string;
    genres: string[];
    genre_ids: string;
    name: string;
    with_genres: any
    genreId: string
    vote_average: number;
    poster: string;
    error: string
}

export interface IGenre {
    id: number;
    name: string;
}