import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusMap: JSON.parse(localStorage.getItem("statusMap")) || [],
};

const saveToLocalStorage = (statusMap) => {
  localStorage.setItem("statusMap", JSON.stringify(statusMap));
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      const id = action.payload;
      const current = state.statusMap[id] || "pending";
      state.statusMap[id] = current === "completed" ? "pending" : "completed";
      saveToLocalStorage(state.statusMap);
    },
    removeStatus: (state, action) => {
      delete state.statusMap[action.payload];
      saveToLocalStorage(state.statusMap);
    },
  },
});

export const { toggleStatus, removeStatus } = statusSlice.actions;
export default statusSlice.reducer;