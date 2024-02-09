import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: 1, text: "task 1", completed: false, editMode: false },
      { id: 2, text: "task 2", completed: false, editMode: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        editMode: false,
      };

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
          todo.editMode = !todo.editMode;
        }
      });
    },
    todoCompleted: (state, action) => {
      const todoupdate = state.todos.find((todo) => todo.id === action.payload);
      if (todoupdate) {
        todoupdate.completed = !todoupdate.completed;
      }
    },
    toggleEditMode: (state, action) => {
      const toggleMode = state.todos.find((todo) => todo.id === action.payload);
      if (toggleMode) {
        toggleMode.editMode = !toggleMode.editMode;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  todoCompleted,
  toggleEditMode,
} = todoSlice.actions;

export default todoSlice.reducer;
