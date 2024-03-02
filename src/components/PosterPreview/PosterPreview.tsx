import React, {FC} from 'react';

import css from './Poster.module.css';
import {posterURL} from "../../configs";

interface PosterPreviewProps {
    poster: string;
    title: string;
}

const PosterPreview: FC<PosterPreviewProps> = ({poster, title}) => {
    return (
        <div className={css.PosterPreview}>
            <img className={css.img} src={`${posterURL + poster}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};
