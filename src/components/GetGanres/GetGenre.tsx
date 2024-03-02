import React, {useEffect, useState} from 'react';

import {movieService} from '../../services';
import styles from "./GetGenre.module.css"
const GetGenre = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        movieService.getGenreID('')
            .then(response => {
                setGenres(response.data.genres);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
            });
    }, []);

    return (
        <div className={styles.bgColor}>
            {genres && genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </div>
    );
};

export {GetGenre};
