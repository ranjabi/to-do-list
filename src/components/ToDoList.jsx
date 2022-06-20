import React from 'react';
import ToDoContainer from './ToDoContainer';

import { useSelector, useDispatch } from 'react-redux';

const ToDoList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="">
      <ul className="container mx-auto pt-4 pb-8">
        {todos.map((todo) => (
          todo.items.length > 0 ? <ToDoContainer key={todo.date} date={todo.date} items={todo.items} /> : null
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
