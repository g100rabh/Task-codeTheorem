import { createSlice } from "@reduxjs/toolkit";
import { ProjectLists } from "../assests/ProjectLists";

const initialState = {
  formVisible: false,
  projectList: [...ProjectLists],
  editItem: null,
  viewItem: null,
};

const dataSlice = createSlice({
  name: "dataStore",
  initialState,
  reducers: {
    setFormVisible(state) {
      state.formVisible = true;
    },
    setFormVisibleOff(state) {
      state.formVisible = false;
    },
    pushItem(state, action) {
      state.projectList = [action.payload, ...state.projectList];
    },
    itemDelete(state, action) {
      const filtered = state.projectList.filter(
        (i) => i.id !== action.payload.id
      );
      state.projectList = filtered;
    },
    setEditItem(state, action) {
      state.editItem = action.payload;
    },
    setEditItemNull(state) {
      state.editItem = null;
    },
    editItemData(state, action) {
      const updatedList = state.projectList.map((item) =>
        item.id === action.payload.edit.id ? action.payload.item : item
      );

      state.projectList = updatedList;
      state.editItem = null;
    },
    setViewItem(state, action){
        state.viewItem = action.payload;
    }
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
