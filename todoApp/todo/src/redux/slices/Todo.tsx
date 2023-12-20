import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: string;
}

const initialState: TodoState = {
  value: "",
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
