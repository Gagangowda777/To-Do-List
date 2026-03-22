import ToDoItem from "./ToDoItem"

function ToDoList({todos, onDelete}) {
  return (
    <ul>
      {todos.map((item)=>(
        <ToDoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default ToDoList