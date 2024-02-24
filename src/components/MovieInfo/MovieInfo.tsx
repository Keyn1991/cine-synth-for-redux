import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IMovie} from "../../interface/interfaceMovie";
import {movieService} from "../../services";
import {posterURL} from "../../configs";
import {MovieTrailers} from "../MovieTrailers/MovieTrailers";

const MovieInfo: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [videos, setVideos] = useState<{ key: string; name: string; }[]>([]);

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
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
            {movie.title}

            <h2>Videos</h2>
            <div>
                {videos.length > 0 && (
                    <MovieTrailers videoKey={videos[0].key} videoName={videos[0].name} />
                )}
            </div>
        </div>
    );
};

export { MovieInfo };
