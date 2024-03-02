import React, {FC} from 'react';
// @ts-ignore
import RatingStars from "react-rating-stars-component";

import css from './StarsRating.module.css';

interface StarsRatingProps {
    movie: {
        vote_average: number;
    };
}

const StarsRating: FC<StarsRatingProps> = ({movie}) => {
    const {vote_average} = movie;

    return (
        <div className={css.StarsRating}>
            <RatingStars
                count={10}
                value={vote_average}
                edit={false}
                size={20}
                activeColor="#ffd700"
                isHalf={true}
            />
        </div>
    );
};

export {StarsRating};
