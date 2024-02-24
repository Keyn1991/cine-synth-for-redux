import { axiosService } from "./axiosService";
import {urls} from "../configs";

const genreService = {
    getAllGenres: () => axiosService.get(urls.genres),
};

export { genreService };
