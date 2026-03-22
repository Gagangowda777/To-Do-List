import ToDoItem from "./ToDoItem"


function ToDoList({todos}) {

  return (
    <ul>
      {todos.map((val)=>(
        <ToDoItem val={val}/>
      ))}
    </ul>
  )
}

export default ToDoList