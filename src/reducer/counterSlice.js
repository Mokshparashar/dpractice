import { createSlice } from "@reduxjs/toolkit";

const dragAndDropSlice = createSlice({
  name: "dragAndDrop",
  initialState: {
    draggedItem: { id: 1, data: "" },
  },
  reducers: {
    updateData: (state, action) => {
      const { newData } = action.payload;
      state.draggedItem.data = newData;
    },
  },
});

export const { updateData } = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
