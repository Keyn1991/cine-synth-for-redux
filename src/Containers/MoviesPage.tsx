import React from 'react';
import {MoviesList} from "../components/MovieList/MovieList";
import {Outlet} from "react-router-dom";


const MoviesPage = () => {
    return (
        <>
            <MoviesList/>
            <Outlet/>
        </>
    );
};

export {MoviesPage};