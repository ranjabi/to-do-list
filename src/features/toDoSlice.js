import { createSlice, current } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

let initialState = []

try {
  let state = JSON.parse(localStorage.getItem('todo'))
  if (state) {
    initialState = state
    // console.log('localstorage');
  }
} catch (e) {
  console.log(e)
}

// [
//   {
//     id, date, task, completed
//   }
// ]

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      let newDate = action.payload.date
      let newTask = action.payload.task // singular
      let newToDo = {
        id: nanoid(),
        date: newDate,
        task: newTask,
        completed: false,
      }

      state.push(newToDo)
      window.localStorage.setItem('todo', JSON.stringify(state))
    },
    finishToDo: (state, action) => {
      const updatedTask = state.map(task => {
        if (action.payload === task.id) {
          console.log('id', task.id)
          return {...task, completed: !task.completed}
        }
        return task
      })
      
      window.localStorage.setItem('todo', JSON.stringify(updatedTask))
      console.log(updatedTask)
      return updatedTask
    },
    editToDo: (state, action) => {
      const editedToDo = state.map((task) => {
        if (action.payload.id === task.id) {
          return { ...task, task: action.payload.newTask }
        }
        return task
      })
      window.localStorage.setItem('todo', JSON.stringify(editedToDo))
      return editedToDo
    },
    deleteToDo: (state, action) => {
      let newState = state.filter((e) => e.id !== action.payload)

      window.localStorage.setItem('todo', JSON.stringify(newState))
      return newState
    }
  },
})

export const { addToDo, editToDo, deleteToDo, finishToDo } = toDoSlice.actions

export default toDoSlice.reducer
