import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { MovieInfo } from './components/MovieInfo';
import { MoviesPage } from './Containers';
import { Header } from './components/Header';
import {Footer} from "./components/Footer";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <MoviesPage />
                <Footer/>
            </>
        ),
        children: []
    },
    {
        path: '/movie/:id',
        element: (
            <>
                <Header />
                <MovieInfo />
                <Footer/>
            </>
        ),
        children: []
    },
    {
        path: '/*', // Маршрут для сторінки Not Found
        element: (
            <>
                <Header />
                <NotFoundPage />
                <Footer/>
            </>
        ),
        children: []
    }
]);

export { router };