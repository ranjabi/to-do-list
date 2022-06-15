import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: "test",
}

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      // state.concat("a");
      console.log(`addToDo ${action.payload.nama}`);
    },
    deleteToDo: (state) => {
      // do something
      console.log('deleteToDo');
      
    },
    // incrementByAmount(state, action) {
    //   state.value += action.payload
    // },
  }
})

export const { addToDo, deleteToDo } = toDoSlice.actions

export default toDoSlice.reducer