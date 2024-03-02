import React, {FC, useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {IMovie} from "../../interface";
import {movieService} from "../../services";
import {posterURL} from "../../configs";
import {MovieTrailers} from "../MovieTrailers";
import {Button} from "react-bootstrap";
import {StarsRating} from "../StarsRating";
import styles from "./MovieInfo.module.css";
import {PosterPreview} from "../PosterPreview";
import {FirstContext} from "../../hoc";
import {GenreBadge} from "../GenreBadge";

const MovieInfo: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [videos, setVideos] = useState<{ key: string; name: string; }[]>([]);

    const navigate = useNavigate();

    const {getGenreNames} = useContext(FirstContext);
    const genreNames = getGenreNames();

    const handleBackClick = () => {
        navigate('/');
    };

    useEffect(() => {
        movieService.getOneMovie(id)
            .then(response => {
                setMovie(response.data);
                movieService.getMovieTrailers(id)
                    .then(response => {
                        setVideos(response.data.results);
                    })
                    .catch(error => {
                        console.error('Помилка отримання відео для фільму:', error);
                    });
            })
            .catch(error => {
                console.error('Помилка отримання детальної інформації про фільм:', error);
            });
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.container}>
                <Button onClick={handleBackClick}>Back</Button>

                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <div className={styles.genreBadgeContainer}>
                    <GenreBadge genres={genreNames}/>
                </div>
                <div className={styles.posterContainer}>
                    <PosterPreview poster={posterURL + movie.poster_path} title={movie.title}/>
                </div>
                <StarsRating movie={movie}/>
                <h2>Videos</h2>
                <div>
                    {videos.length > 0 && (
                        <MovieTrailers videoKey={videos[0].key} videoName={videos[0].name}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};
