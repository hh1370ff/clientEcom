import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { axiosPublicInstance } from "../../api/axiosInstance";
const imageAdapter = createEntityAdapter({
  selectId: (image) => image._id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = imageAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchImages = createAsyncThunk(
  "fetchImage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublicInstance.get("/carousel");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        imageAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const carouselReducer = carouselSlice.reducer;
export const { selectAll: selectAllImages } = imageAdapter.getSelectors(
  (state) => state.carousel
);
