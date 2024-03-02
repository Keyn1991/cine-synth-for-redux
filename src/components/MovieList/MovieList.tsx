import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {genreService, movieService} from '../../services';
import {MoviesListCard} from '../MoviesListCard';
import {CustomPagination} from '../CustomPagination';
import styles from "./MoviesList.module.css";
import {Search} from "../Search";
import {GenreList} from "../Ganre";
import {CustomLoader} from "../CustomLoader";


const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const [currentPage, setCurrentPage] = useState(1);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const response = await movieService.getGenreID(query.get('with_genres'), page ? parseInt(page) : 1);
            setMovies(response.data.results);
            setFilteredMovies(response.data.results);
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

    const handleSearch = async (searchTerm: string) => {
        try {
            const response = await movieService.movieSearch(searchTerm);
            setFilteredMovies(response.data.results);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, [query]);

    const nextPage = () => {
        setQuery(value => {
            fetchMovies();
            return {...value, page: String(+value.get('page') + 1)};
        });
    };

    const prevPage = () => {
        setQuery(value => {
            fetchMovies(); // Оновити фільми при зміні сторінки
            return {...value, page: String(+value.get('page') - 1)};
        });
    };

    const handleGenreClick = (genreId: string) => {
        setQuery({with_genres: genreId, page: '1'});
    };

    return (
        <div className={styles.container}>
            {loading && <CustomLoader />}
            <div className={styles.leftColumn}>
                <h2>Genres:</h2>
                <GenreList onGenreClick={handleGenreClick}/>
            </div>
            <div className={styles.rightColumn}>
                <Search onSearch={handleSearch}/>
                <div className={styles.moviesGrid}>
                    {filteredMovies.map(movie => (
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

export {MoviesList};
