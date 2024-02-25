import React, { useEffect, useState } from 'react';
import { movieService } from '../../services';

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
        <ul>
            {genres && genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export { GetGenre };
