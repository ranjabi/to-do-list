import { createSlice } from '@reduxjs/toolkit'

let initialState = [{date: '2022-06-16', items: ['makan']}]

try {
  let state = JSON.parse(localStorage.getItem('todo'))
  if (state) {
    initialState = state
    console.log('localstorage');
    
  }
} catch (e) {
  console.log(e)
}

const isExist = (date, todo) => {
  if (todo.some(e => e.date === date)) {
    return true
  }
  return false
}

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
      let newDate = action.payload.date
      let newItem = action.payload.items
      let newToDo = {
        date: newDate,
        items: [newItem]
      }
      
      if (isExist(newDate, state)) {
        for (let item of state) {
          if (item.date === newDate) {
            item.items.push(newItem)
            window.localStorage.setItem('todo', JSON.stringify(state))
            return state
          }
        }
      } 
      else {
        window.localStorage.setItem('todo', JSON.stringify(state))
        return state.concat(newToDo)
      }
      
      
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