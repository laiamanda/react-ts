import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import NewTodo from './components/NewToDo';
import { ToDo } from './todo.model';

const App: React.FC = () => {
  // const toDos = [{id: 't1', text: 'Finish the course'}];
  const [toDos, setTodos] = useState< ToDo []>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevToDos => [...prevToDos, 
      {id: Math.random().toString(), text: text}
    ]);
  };
  const toDoDeleteHandler = (todoId: string) => {
    setTodos(prevToDos => {
      return prevToDos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
     <ToDoList items={toDos} onDeleteTodo={toDoDeleteHandler}/>
    </div>
  );
}

export default App;
