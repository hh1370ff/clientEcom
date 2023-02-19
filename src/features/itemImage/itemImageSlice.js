import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { axiosPublicInstance } from "../../api/axiosInstance";

const itemImageAdapter = createEntityAdapter({
  selectId: (itemImage) => itemImage.itemId,
  sortComparer: (a, b) => a.itemId.localeCompare(b.itemId),
});

const initialState = itemImageAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchItemImages = createAsyncThunk(
  "fetchItemImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublicInstance.get("/items/itemImages");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const itemImagesSlice = createSlice({
  name: "itemImages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItemImages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItemImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        itemImageAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchItemImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const itemImagesReducer = itemImagesSlice.reducer;
export const { selectAll: selectAllItemImages } = itemImageAdapter.getSelectors(
  (state) => state.itemImages
);

export const selectItemImageById = (state, id) =>
  state.itemImages.status === "succeeded"
    ? state.itemImages.entities[id]
    : null;
