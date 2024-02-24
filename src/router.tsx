import {createBrowserRouter} from "react-router-dom";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {MoviesPage} from "./Containers/MoviesPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MoviesPage/>, children: []
    },
    {
        path: '/movie/:id',
        element: <MovieInfo />,
        children: []
    }
])

export {router}