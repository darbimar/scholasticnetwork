import { createSlice } from "@reduxjs/toolkit";

interface LoadState {
    loading: boolean
}

const initialState: LoadState = {
    loading: false
}


export const loadSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        isLoading(state) {
            state.loading = true;
        },
        isLoaded(state) {
            state.loading = false;
        }
    }
})

export const {isLoading, isLoaded} = loadSlice.actions;

export default loadSlice.reducer;