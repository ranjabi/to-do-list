import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <NewToDo />
      <ToDoList />
    </div>
  );
}

export default App;
