import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

let initialState = [];

try {
  let state = JSON.parse(localStorage.getItem('todo'));
  if (state) {
    initialState = state;
    // console.log('localstorage');
  }
} catch (e) {
  // console.log(e);
}

const isExist = (date, todo) => {
  if (todo.some((e) => e.date === date)) {
    return true;
  }
  return false;
};

// [
//   {
//     date:
//     items: [
//       1,
//       2,
//       3,
//     ]
//   },
//   {
//     date:
//     items: [
//       1,
//       2,
//       3,
//     ]
//   },
// ]

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      let newDate = action.payload.date;
      let newItem = action.payload.items;
      let newToDo = {
        date: newDate,
        items: [{ id: 'todo-' + nanoid(), task: newItem, completed: false }],
      };

      if (isExist(newDate, state)) {
        for (let item of state) {
          if (item.date === newDate) {
            item.items.push({
              id: 'todo-' + nanoid(),
              task: newItem,
              completed: false,
            });
            // console.log('masuk');

            window.localStorage.setItem('todo', JSON.stringify(state));
            return state;
          }
        }
      } else {
        window.localStorage.setItem('todo', JSON.stringify(state));
        return state.concat(newToDo);
      }
    },
    editToDo: (state, action) => {
      const editedToDo = state.map((task) => {
        if (action.payload.id === task.id) {
          return { ...task, name: action.payload.newName };
        }
        return task;
      });
      return editedToDo;
    },
    deleteToDo: (state, action) => {
      let newState = state.map((e) => {
        return {
          ...e,
          items: e.items.filter((items) => items.id !== action.payload),
        };
      });
      window.localStorage.setItem('todo', JSON.stringify(newState));
      return newState
    },
    // incrementByAmount(state, action) {
    //   state.value += action.payload
    // },
  },
});

export const { addToDo, editToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
