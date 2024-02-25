import React, { useEffect, useState } from 'react';
import { genreService } from '../../services';

interface GenreListProps {
    onGenreClick: (genreId: string) => void;
}

const GenreList: React.FC<GenreListProps> = ({ onGenreClick }) => {
    const [genres, setGenres] = useState<{ id: string; name: string }[]>([]);


    useEffect(() => {
        genreService.getAllGenres()
            .then(response => {
                setGenres(response.data.genres);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
            });
    }, []);
    const handleGenreClick = (genreId: string) => {
        onGenreClick(genreId);
    };

    return (
        <ul>
            {genres.map(genre => (
                <li key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                </li>
            ))}
        </ul>
    );
};

export { GenreList };
