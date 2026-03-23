
import { useState } from "react";

function ToDoItem({item, onDelete, onEdit, onToggleComplete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  function handleEdit(){
    setIsEditing(true);
    setEditText(item.text);
  };

  function handleSave(){
    onEdit(item.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="button" onClick={handleSave} className="bg-gray-500">Save</button>
        </>
      ) 
      : 
      (
        <>
          <label>
            <input
              type="checkbox"
              checked={item.completed || false}
              onChange={() => onToggleComplete(item.id)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
          </label>
          <button type="button" onClick={handleEdit} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Edit</button>
          <button type="button" onClick={() => onDelete(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Delete</button>
        </>
      )}
    </li>
  )
}

export default ToDoItem