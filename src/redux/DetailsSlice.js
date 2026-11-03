import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("details")) || [],
};

const saveToLocalStorage = (items) => {
  localStorage.setItem("details", JSON.stringify(items));
};

const details = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.items.push(action.payload);
      saveToLocalStorage(state.items);
    },

    deleteDetails: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.items);
    },

    editDetails: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
        saveToLocalStorage(state.items);
      }
    },

    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
  },
});

export const { addDetails, deleteDetails, editDetails, setEditingTask } = details.actions;
export default details.reducer;