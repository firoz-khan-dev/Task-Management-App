import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  dateTerm: "",
  statusTerm : "all"
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDateTerm: (state, action) => {
      state.dateTerm = action.payload;
    },
    setStatusTerm: (state, action) => {
      state.statusTerm = action.payload;
    },
  },
});

export const { setSearchTerm, setDateTerm, setStatusTerm } = filterSlice.actions;
export default filterSlice.reducer;