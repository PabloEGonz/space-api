import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets',
  async (thunkAPI) => {
    try {
      const res = await axios(url);
      const resp = res.data;
      const filtered = resp.map((item) => ({
        name: item.name,
        id: item.id,
        image: item.flickr_images[0],
        description: item.description,
        reserved: false,
      }));
      return filtered;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

const initialState = {
  rockets: JSON.parse(localStorage.getItem('rockets')) || [],
  isLoading: false,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReserve: (state, { payload }) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      localStorage.setItem('rockets', JSON.stringify(state.rockets));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rockets = payload;
        localStorage.setItem('rockets', JSON.stringify(state.rockets));
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.name;
      });
  },
});

export const { toggleReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
