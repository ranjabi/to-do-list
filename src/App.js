import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';
import ToggleStatus from './components/ToggleStatus';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <NewToDo />
      <ToggleStatus />
      <ToDoList />
    </div>
  );
}

export default App;
