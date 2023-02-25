import React, { useRef } from 'react';
// import { Route } from 'react-router-dom';

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string)=> void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">To-Do</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add ToDo</button>
        </form>
    )

};

export default NewTodo;