

import { useState } from "react";

function ToDoItem({item, onDelete, onEdit}) {
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
          <button type="button" onClick={handleSave}>Save</button>
        </>
      ) 
      : 
      (
        <>
          {item.text}
          <button type="button" onClick={handleEdit}>Edit</button>
          <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default ToDoItem