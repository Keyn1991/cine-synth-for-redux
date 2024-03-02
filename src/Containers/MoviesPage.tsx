import React from 'react';
import {Outlet} from "react-router-dom";

import {MoviesList} from "../components/MovieList";


const MoviesPage = () => {
    return (
        <>
            <MoviesList/>
            <Outlet/>
        </>
    );
};

export {MoviesPage};