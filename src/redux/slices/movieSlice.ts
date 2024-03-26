import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieService } from '../../services';
import { IMovie } from "../../interface";

interface MovieState {
    movies: IMovie[];
    filteredMovies: IMovie[];
    totalPages: number;
    loading: boolean;
}

const initialState: MovieState = {
    movies: [],
    filteredMovies: [],
    totalPages: 1,
    loading: true,
};
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (payload: { genreID: string, page: number }) => {
        const response = await movieService.getGenreID(payload.genreID, payload.page);
        return response.data;
    }
);

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setFilteredMovies(state, action) {
            state.filteredMovies = action.payload;
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload.results;
                state.filteredMovies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                console.error('Error fetching movies:', action.error);
            });
    },
});

export const { setMovies, setFilteredMovies, setTotalPages, setLoading } = movieSlice.actions;

export default movieSlice.reducer;
