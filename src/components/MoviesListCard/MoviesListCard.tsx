import React, {FC} from "react";
import {Link} from "react-router-dom";


import {IMovie} from "../../interface";
import {GenreBadge} from "../GenreBadge";
import styles from './MoviesListCard.module.css';
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";

interface MoviesListCardProps {
    movie: IMovie;
    genres: IMovie[];
}

const MoviesListCard: FC<MoviesListCardProps> = ({movie, genres}) => {
    const {id, title, poster_path} = movie;

    const movieGenres: IMovie[] = genres.filter(genre => movie.genre_ids.includes(genre.id));
    const genreNames: string[] = movieGenres.map(genre => genre.name);

    return (
        <div className={styles.movieCard}>
            <Link to={`/movie/${id}`}>
                <GenreBadge genres={genreNames}/>
                <PosterPreview poster={poster_path} title={title}/>
                <h2>{title}</h2>
                <StarsRating movie={movie}/>
            </Link>
        </div>
    );
};

export {MoviesListCard};
