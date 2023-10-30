import React, { useState } from 'react';

const EditTodo = ({ todo, editTodo, cancelEdit }) => {
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = () => {
        if (editedText.trim() === '') {
      // Evite salvar tarefas vazias
        return;
    }

    editTodo(todo.id, editedText);
    cancelEdit();
};

    return (
        <div>
            <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={cancelEdit}>Cancelar</button>
    </div>
);
};

export default EditTodo;
