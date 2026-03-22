import ToDoItem from "./ToDoItem"

function ToDoList({todos, onDelete, onEdit}) {
  return (
    <ul>
      {todos.map((item)=>(
        <ToDoItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}

export default ToDoList