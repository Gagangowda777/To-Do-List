import { useState } from "react";

function ToDoItem({item, onDelete, onEdit, onToggleComplete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  //function to toggle edit to true when clicked and set the edited text
  function handleEdit(){
    setIsEditing(true);
    setEditText(item.text);
  };
  // function to save the edit and return the isEditing state to false
  function handleSave(){
    onEdit(item.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="bg-white p-3 rounded shadow-sm flex items-center gap-3">
      {isEditing ? (
        <>
          <input
            className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSave}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={item.completed || false}
            onChange={() => onToggleComplete(item.id)}
            className="w-5 h-5"
          />
          <span
            className={`flex-1 ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          >
            {item.text}
          </span>
          <button
            type="button"
            onClick={handleEdit}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-sm"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(item.id)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-sm"
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default ToDoItem;