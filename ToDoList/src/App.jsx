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
    setTodos([...todos, { id: Date.now().toString(36) + Math.random().toString(36).substring(2), text: input, completed: false }]);
    setInput('')
  }

  function handleDelete(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggleComplete(id){
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  function handleEdit(id, newText){
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  }

  return (
    <div>
     
        <form onSubmit={handleSubmit} className="flex ">
          <input type="text" 
                  onChange={handlebtn} 
                  required placeholder="Enter a task" 
                  value={input} 
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>


          <button type="submit" 
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Add Task
          </button>
        </form>
        

      <ToDoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggleComplete={handleToggleComplete}
      />

    </div>
  )
}

export default App;