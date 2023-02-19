import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { axiosPublicInstance } from "../../api/axiosInstance";
const carouselImageAdapter = createEntityAdapter({
  selectId: (image) => image.carouselId,
  sortComparer: (a, b) => a.carouselId.localeCompare(b.carouselId),
});

const initialState = carouselImageAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchCarouselImages = createAsyncThunk(
  "fetchCarouselImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublicInstance.get(
        "/carousel/carouselImages"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const carouselImagesSlice = createSlice({
  name: "carouselImages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCarouselImages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCarouselImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        carouselImageAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCarouselImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const carouselImageReducer = carouselImagesSlice.reducer;
export const { selectAll: selectAllCarouselImages } =
  carouselImageAdapter.getSelectors((state) => state.carouselImages);

export const selectCarouselImageById = (state, id) =>
  state.carouselImages.status === "succeeded"
    ? state.carouselImages.entities[id]
    : null;
