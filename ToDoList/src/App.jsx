import { useState } from "react"
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handlebtn(e){
    setInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, { id: Date.now().toString(36) + Math.random().toString(36).substring(2), text: input }]);
    setInput('')
  }

  function handleDelete(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleEdit(id, newText){
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  }

  return (
    <div>
     
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handlebtn} required placeholder="Enter a task" value={input} />
          <button type="submit">Add Task</button>
        </form>
        
      <ToDoList todos={todos} onDelete={handleDelete} onEdit={handleEdit}/>

    </div>
  )
}

export default App;