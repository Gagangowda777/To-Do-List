

function ToDoItem({item, onDelete}) {
  return (
    <li>
      {item.text}
      <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
      <button type="submit">Edit</button>
    </li>
  )
}

export default ToDoItem