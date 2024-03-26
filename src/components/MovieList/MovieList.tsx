import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies, setFilteredMovies } from '../../redux/slices/movieSlice';
import { MoviesListCard } from '../MoviesListCard';
import { Search } from "../Search";
import { GenreList } from "../GenreList";
import { RootState } from '../../redux';
import { CustomLoader } from "../CustomLoader";
import { CustomPagination } from "../CustomPagination";
import styles from "./MoviesList.module.css";
import { movieService } from "../../services";

const MoviesList = () => {
    const dispatch = useDispatch();
    const { filteredMovies, loading, totalPages } = useSelector((state: RootState) => state.movies);
    const { genres } = useSelector((state: RootState) => state.genres);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = query.get('page');
    const [currentPage] = useState(1);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchMovies({ genreID: query.get('with_genres') || '', page: parseInt(page || '1') }));
    }, [dispatch, query, page]);

    const nextPage = () => {
        const nextPageNumber = parseInt(page || '1') + 1;
        setQuery({ ...query, page: nextPageNumber.toString() });
    };

    const prevPage = () => {
        const prevPageNumber = Math.max(parseInt(page || '1') - 1, 1);
        setQuery({ ...query, page: prevPageNumber.toString() });
    };

    const handleGenreClick = (genreId: string) => {
        setQuery({ with_genres: genreId, page: '1' });
    };

    const handleSearch = async (searchTerm: string) => {
        try {
            const response = await movieService.movieSearch(searchTerm);
            dispatch(setFilteredMovies(response.data.results));
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div className={styles.container}>
            {loading && <CustomLoader />}
            <div className={styles.leftColumn}>
                <h2>Genres:</h2>
                <GenreList onGenreClick={handleGenreClick} genres={genres} />
            </div>
            <div className={styles.rightColumn}>
                <Search onSearch={handleSearch} />
                <div className={styles.moviesGrid}>
                    {filteredMovies.map((movie) => (
                        <div key={movie.id} className={styles.movieBlock}>
                            <MoviesListCard movie={movie} genres={genres} />
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
