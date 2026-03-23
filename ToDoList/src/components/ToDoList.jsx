import ToDoItem from "./ToDoItem"

function ToDoList({todos, onDelete, onEdit, onToggleComplete}) {
  return (
    <ul className="space-y-2">
      {/* passing props to todoItem */}
      {todos.map((item)=>(
        <ToDoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  )
}

export default ToDoList;