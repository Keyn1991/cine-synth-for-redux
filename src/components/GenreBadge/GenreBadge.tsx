import React, {FC} from "react";
import Badge from 'react-bootstrap/Badge';

interface GenreBadgeProps {
    genres: string[];
}

const GenreBadge: FC<GenreBadgeProps> = ({genres}) => {
    const visibleGenres = genres.slice(0, 3);

    return (
        <>
            {visibleGenres.map((genre, index) => (
                <Badge key={index} bg="primary" className="mr-1">
                    {genre}
                </Badge>
            ))}
        </>
    );
};

export {GenreBadge};
