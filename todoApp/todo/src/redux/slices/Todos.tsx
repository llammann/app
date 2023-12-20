import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  value: string[];
}

const initialState: TodosState = {
  value: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    // addTodo: (state, action: PayloadAction<string>) => {
    //   state.value.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setTodos } = TodoSlice.actions;

export default TodoSlice.reducer;
