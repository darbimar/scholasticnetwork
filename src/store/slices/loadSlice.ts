import { createSlice } from '@reduxjs/toolkit';

interface LoadState {
  loading: boolean;
}

const initialState: LoadState = {
  loading: false,
};

export const loadSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadSlice.actions;

export default loadSlice.reducer;
