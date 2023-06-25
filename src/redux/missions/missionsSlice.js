import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

// GET
export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(MISSIONS_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Oops! Please try again later');
    }
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: JSON.parse(localStorage.getItem('missions')) || [],
  reducers: {
    toggleMissionStatus: (state, action) => {
      const missionId = action.payload;
      const missionToUpdate = state.find((mission) => mission.mission_id === missionId);
      if (missionToUpdate) {
        missionToUpdate.status = !missionToUpdate.status;
      }

      localStorage.setItem('missions', JSON.stringify(state));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => {
        const missionsFromLocalStorage = JSON.parse(localStorage.getItem('missions'));
        if (missionsFromLocalStorage) {
          return missionsFromLocalStorage;
        }
        if (state.length === 0) {
          const missionsArr = action.payload;
          const missionsId = Object.keys(missionsArr);

          const missions = missionsId.map((id) => ({
            mission_id: id,
            mission_name: missionsArr[id].mission_name,
            description: missionsArr[id].description,
            status: false,
          }));

          localStorage.setItem('missions', JSON.stringify(missions));

          return missions;
        }
        return state;
      });
  },
});
export default missionsSlice.reducer;
export const { toggleMissionStatus } = missionsSlice.actions;
