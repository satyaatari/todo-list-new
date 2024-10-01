import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  name: string;
  completedDates: string[];
  userId: string;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

// State
const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};



const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ name: string; userId: string }>
    ) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        name: action.payload.name,
        completedDates: [],
        userId: action.payload.userId,
        createdAt: new Date().toISOString(),
      };
      console.log("newTodo ::", newTodo);
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      console.log(action);

      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        const index = todo.completedDates.indexOf(action.payload.date);
        if (index > -1) {
            todo.completedDates.splice(index, 1);
        } else {
            todo.completedDates.push(action.payload.date);
        }
      }
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; userId: string; name: string }>
    ) => {
      const todo = state.todos.find(
        (t) => t.id === action.payload.id && t.userId === action.payload.userId
      );
      if (todo) {
        todo.name = action.payload.name;
      } else {
        state.error = "Todo not found or UserId does not match.";
      }
    },
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
