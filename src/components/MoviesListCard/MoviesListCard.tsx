import React, { FC } from "react";
import { IMovie } from "../../interface/interfaceMovie";
import { GenreBadge } from "../GenreBadge/GenreBadge";
import { Link } from "react-router-dom";
import styles from './MoviesListCard.module.css';


interface MoviesListCardProps {
    movie: IMovie;
    genres: IMovie[];

}

const MoviesListCard: FC<MoviesListCardProps> = ({ movie, genres }) => {
    const { id, title, poster_path } = movie;

    const movieGenres: IMovie[] = genres.filter(genre => movie.genre_ids.includes(genre.id));
    const genreNames: string[] = movieGenres.map(genre => genre.name);

    return (
        <div className={styles.movieCard}> {/* Використовуємо стилі з модуля */}
            <Link to={`/movie/${id}`}>
                <GenreBadge genres={genreNames}/>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={styles.poster}/>
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

export {MoviesListCard};
