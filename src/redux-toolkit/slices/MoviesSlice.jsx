import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    try{
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        return data.results;
    }catch(err){
        console.error(err.message);
    }
})
const initialState = {
    movies: [],
    loading: false,
    error: null
}
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie(state, { payload }) {
            return [...state, payload];
        },
        deleteMovie(state, { payload }) {
            return state.filter(movie => movie.id!==payload);
        },
        updateMovie(state, { payload }) {
            return state.map(movie =>
                movie.id === payload.id? {...movie,...payload}: movie
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const {deleteMovie} = moviesSlice.actions
export default moviesSlice.reducer