import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { pagination } from "~/config/constant";

const initialState: any = {
  data: [],
  loading: false,
  error: false,
  filter: {
    startDate: DateTime.now().minus({ weeks: 1 }).toISO(),
    endDate: DateTime.now().toISO(),
  },
  page: pagination.defaultPage,
  limit: pagination.defaultLimit,
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
};

export const analysisReducer = createSlice({
  name: "analysisSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.data = [];
      state.page = pagination.defaultPage;
      state.limit = pagination.defaultLimit;
    },
    fetchData: (state) => {
      state.loading = true;
    },
    fetchDataFailed: (state) => {
      state.error = true;
    },
    setFilter: (state, action) => {
      state.loading = true;
      state.filter = { ...state.filter, ...action.payload };
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    nextPage: (state) => {
      state.page += 1;
      state.loading = true;
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
        state.loading = true;
      }
    },
    setLimit: (state, action) => {
      state.page = 1;
      state.limit = action.payload;
      state.loading = true;
    },
    deleteItem: (state, action) => {
      state.data = state.data?.filter(
        (item: any) => item._id !== action.payload
      );
    },
    addItem: (state, action) => {
      if (state.pagination.totalPages === state.page) {
        state.data.push(action.payload);
      }
    },
    replaceItem: (state, action) => {
      const { data } = state.data;
      const { payload } = action;

      // Find the index of the item to replace
      const index = data.findIndex((item: any) => item._id === payload._id);

      if (index !== -1) {
        // Replace the item at the found index
        state.data[index] = payload;
      }
    },
  },
});

export const {
  setDataEmpty,
  fetchData,
  setFilter,
  fetchDataFailed,
  setData,
  nextPage,
  prevPage,
  setLimit,
  deleteItem,
  addItem,
  replaceItem,
} = analysisReducer.actions;
export default analysisReducer.reducer;
