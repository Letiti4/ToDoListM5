import React from 'react';

const Todo = ({ todo, removeTodo, completeTodo, setEditingTodo }) => {
    return (
        <div className='todo' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            <div className='content'>
                <p>{todo.text}</p>
                <p className='categoria'>({todo.categoria})</p>
            </div>
            <div>
                <button className='Complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='Remove' onClick={() => removeTodo(todo.id)}>X</button>
                <button className='Edit' onClick={() => setEditingTodo(todo)}>Editar</button>
            </div>
        </div>
    );
};

export default Todo;