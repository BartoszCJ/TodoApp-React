import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  tytul: string;
  opis: string;
  daily: boolean;
  kategoria: string;
}


interface TodosState {
  todos: Todo[];
  status: "bezczynny" | "laduje" | "blad";
}

const initialState: TodosState = {
  todos: [],
  status: "bezczynny",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    reorderTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.status = "bezczynny";
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setStatus: (
      state,
      action: PayloadAction<"bezczynny" | "laduje" | "blad">
    ) => {
      state.status = action.payload;
    },
  },
});

export const { reorderTodos, setTodos, addTodo, deleteTodo, setStatus } =
  todosSlice.actions;
export default todosSlice.reducer;
