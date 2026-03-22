import { useState } from "react"
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [ input, setInput] = useState('');

  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, input]);
    setInput('')
  }
  function handlebtn(e){
    setInput(e.target.value)
  }
  return (
    <div>
     
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handlebtn} placeholder="Enter a task" value={input} />
          <button type="submit">Add Task</button>
        </form>

      <ToDoList todos = {todos}  />
    </div>
  )
}

export default App;