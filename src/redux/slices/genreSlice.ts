import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../../interface';
import { genreService } from '../../services';

interface GenreState {
    genres: IMovie[];
}

const initialState: GenreState = {
    genres: [],
};

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenres(state, action: PayloadAction<IMovie[]>) {
            state.genres = action.payload;
        },
    },
});

export const { setGenres } = genreSlice.actions;

export default genreSlice.reducer;

export const fetchGenres = async () => {
    try {
        const response = await genreService.getAllGenres();
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error;
    }
};
