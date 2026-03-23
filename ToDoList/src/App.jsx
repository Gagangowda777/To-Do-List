import { useState } from "react"
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  //function to take input from user and set it to input variable using useState
  function handlebtn(e){
    setInput(e.target.value)
  }
  //function to take values from input variable and set it to todos array using use state 
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, { id: Date.now().toString(36) + Math.random().toString(36).substring(2), text: input, completed: false }]);
    setInput('')
  }
  //function to delete todoItem
  function handleDelete(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }
  //function to mark as complete 
  function handleToggleComplete(id){
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  //function to edit todoList
  function handleEdit(id, newText){
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4 pt-12">
    
      <div className="bg-gray-50 flex flex-col w-full max-w-md rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            onChange={handlebtn}
            required
            placeholder="Enter a task"
            value={input}
            className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </form>

        {/* passing props to tosoList */}
        <ToDoList
          todos={todos}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  )
}

export default App;