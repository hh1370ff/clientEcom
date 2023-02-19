import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { axiosPublicInstance } from "../../api/axiosInstance";

const itemsAdapter = createEntityAdapter({
  selectId: (item) => item._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = itemsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchItems = createAsyncThunk(
  "fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublicInstance.get("/items");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        itemsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const itemsReducer = itemsSlice.reducer;
export const {
  selectAll: selectAllItems,
  selectIds: selectItemIds,
  selectById: selectItemById,
} = itemsAdapter.getSelectors((state) => state.items);
