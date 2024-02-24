import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { genreService, movieService } from '../../services';
import { MoviesListCard } from '../MoviesListCard/MoviesListCard';
import { CustomPagination } from '../CustomPagination/CustomPagination';
import styles from "./MoviesList.module.css";

const MoviesList = () => {
    const { id: genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useSearchParams({ with_genres: `${genreId}`, page: '1' });
    const page = query.get('page');
    const [currentPage, setCurrentPage] = useState(1)
    const with_genres = query.get('with_genres');

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const response = await movieService.getAllMovies(parseInt(page));
            setMovies(response.data.results);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchGenres = async () => {
        try {
            const response = await genreService.getAllGenres();
            setGenres(response.data.genres);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, [query]);

    const nextPage = () => {
        setQuery(value => ({ page: String(+value.get('page') + 1) }));
    };

    const prevPage = () => {
        setQuery(value => ({ page: String(+value.get('page') - 1) }));
    };

    return (
        <div className={styles.container}>
            {loading && <h1>Loading.........</h1>}
            <div className={styles.leftColumn}>
                <h2>Genres:</h2>
                <ul>
                    {genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.moviesGrid}>
                    {movies.map(movie => (
                        <div key={movie.id} className={styles.movieBlock}>
                            <MoviesListCard movie={movie} genres={genres}/>
                        </div>
                    ))}
                </div>
                <CustomPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    setQuery={setQuery}
                />
            </div>
        </div>
    );
};

export { MoviesList };
