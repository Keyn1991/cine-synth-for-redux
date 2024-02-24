import React, { FC } from "react";
import Badge from 'react-bootstrap/Badge';

interface GenreBadgeProps {
    genres: string[];
}

const GenreBadge: FC<GenreBadgeProps> = ({ genres }) => {
    if (genres.length === 1) {
        return null;
    }

    return (
        <>
            {genres.map((genre, index) => (
                <Badge key={index} bg="primary" className="mr-1">
                    {genre}
                </Badge>
            ))}
        </>
    );
};

export { GenreBadge };
