import { useState } from 'react';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';
import ToggleStatus from './components/ToggleStatus';

function App() {
  const [filter, setFilter] = useState('All')

  const filterMap = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  }

  return (
    <div className="bg-slate-200 min-h-screen">
      <NewToDo />
      <ToggleStatus setFilter={setFilter} />
      <ToDoList filter={filter} filterMap={filterMap}/>
    </div>
  );
}

export default App;
